/* @file auth.js
 * @brief Defines the routes for the authentication end points in the API, as
 * defined in the auth spec in api.md.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var request = require('request-promise');
var config = require('../config');

//==============================================================================
// Google OAuth goodies.
//==============================================================================
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2client = new OAuth2(config.google.clientID, config.google.clientSecret);
var hd = 'andrew.cmu.edu';

/* @brief Validates an OpenID token using the Google libraries.
 *
 * @param {string} token The token to validate.
 * @return {Promise} A promise that resolves into the correct ID Token if it is
 * valid.
 */
var verifyToken = function (token) {
  return new Promise((resolve, reject) => {
    oauth2client.verifyIdToken(token, null, (err, data) => {
      if (err) {
        reject(err);
      } else {
        var token = data.getPayload();
        // The client may already do these checks, but might as well double
        // triple check :).
        if (token.aud !== config.google.clientID) {
          reject(new Error('ClientID mismatch.'));
        } else if (token.hd !== hd) {
          reject(new Error('Hosted Domain mismatch.'));
        } else {
          resolve(token);
        }
      }
    });
  });
};

var db;

//==============================================================================
// Client library.
//==============================================================================
var lib = {};

/* @brief Middleware that ensure connection is logged in. */
lib.requireLoggedIn = function (req, res, next) {
  if (req.session.isLoggedIn === true) {
    next();
  } else {
    res.status(403);
    res.end('Not logged in.\n');
  }
};

/* @brief Middleware that ensure connection is logged in with an admin. */
lib.requireAdmin = function (req, res, next) {
  if (req.session.isLoggedIn === true) {
    if (req.session.isAdmin === true) {
      next();
    } else {
      res.status(403);
      res.end('Logged-in user isn\'t an admin.\n');
    }
  } else {
    res.status(403);
    res.end('Not logged in.\n');
  }
};

/* @brief Middleware that ensure connection logged out. */
lib.requireLoggedOut = function (req, res, next) {
  if (req.session.isLoggedIn === true) {
    res.status(403);
    res.end('Already logged in.\n');
  } else {
    next();
  }
};

//==============================================================================
// Express handlers.
//==============================================================================
var handlers = {};

//==============================================================================
// GET/POST /auth/login
//==============================================================================
handlers.login = {};

/* @brief Queries whether a user is logged in. */
handlers.login.get = function (req, res) {
  res.status(200);
  res.json({
    'login': req.session.isLoggedIn === true,
    'admin': req.session.isAdmin === true,
  });
};

/* @brief Logs a user in. */
handlers.login.post = function (req, res) {
  req.checkBody('token').notEmpty();

  var errs = req.validationErrors();
  if (errs) {
    res.status(400);
    res.end(`Error: ${ JSON.stringify(errs) }.\n`);
    return;
  }

  var token;
  verifyToken(req.body.token).then((id_token) => {
    token = id_token;
    var id = token.sub;
    req.session.isLoggedIn = true;
    req.session.ownerID = String(id);

    var query = 'SELECT * FROM users WHERE google_id = ?';
    return db.query(query, [req.session.ownerID]);
  }).then((rows) => {
    if (rows.length === 1) {
      res.status(200);
      req.session.isAdmin = (rows[0].is_admin === 1);
      res.json({
        'login': req.session.isLoggedIn,
        'admin': req.session.isAdmin,
      });
      return;
    }

    // Not present in DB
    var [andrewID, domain] = token.email.split('@');

    if (domain !== hd) {
      throw new Error(`Mail domain '${domain}' invalid.`);
    }

    request({
      'uri': `http://apis.scottylabs.org/directory/v1/andrewID/${andrewID}`,
      'json': true,
    }).then((data) => {
      req.session.isAdmin = data.andrewID === config.MASTER_ADMIN;
      var info = [
        req.session.ownerID,  // google_id
        data.andrewID,  // andrewID
        data.first_name, // first_name
        data.middle_name, // middle_name
        data.last_name, // last_name
        data.preferred_email, // preferred_email
        data.department, // student_major
        data.student_class, // student_class
        true, // in_resume_drop
        req.session.isAdmin // is_admin
      ];

      var query = 'INSERT INTO users (google_id, andrewID, first_name, middle_name, last_name, preferred_email, student_major, student_class, in_resume_drop, is_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      return db.query(query, info);
    }).then((data) => {
      res.status(200);
      res.json({
        'login': req.session.isLoggedIn,
        'admin': req.session.isAdmin,
      });
    });
  }).catch((err) => {
    req.session.isLoggedIn = false;
    req.session.isAdmin = false;
    req.session.ownerID = '';
    res.status(403);
    res.end(`Error: ${ JSON.stringify(err) }.\n`);
    return;
  });
};

//==============================================================================
// POST /auth/logout
//==============================================================================
/* @brief Logs out a user. */
handlers.logout = function (req, res) {
  req.session.isLoggedIn = false;
  req.session.isAdmin = false;
  req.session.ownerID = '';

  res.status(200);
  res.json({
    'login': req.session.isLoggedIn === true,
    'admin': req.session.isAdmin === true,
  });
};

/* @brief Initializes the authentication library and routes.
 * @param app Object The Express object to attach routes to.
 * @param dbConn Object A connection to a mySQL database.
 * @returns Object The client library, as an object.
 */
var init = function (app, dbConn) {
  db = dbConn;

  // Attach handlers.
  app.get('/auth/login', handlers.login.get);

  app.post('/auth/login', handlers.login.post);
  app.post('/auth/logout', lib.requireLoggedIn, handlers.logout);

  console.log('Initialized application authentication library.');

  return lib;
};

module.exports = init;
