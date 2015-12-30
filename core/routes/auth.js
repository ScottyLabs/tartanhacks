/* @file auth.js
 * @brief Defines the routes for the authentication end points in the API, as
 * defined in the auth spec in api.md.
 *
 * @author Oscar Bezi (oscar@bezi.io)
 */
'use strict';
var clientID = '896735026831-2bc35407elu3h5rfed6o4r65mv3nea3p.apps.googleusercontent.com';
var clientSecret = '8jkVKn1ylghCs2SIqwKfBBKe';

var request = require('request');

//==============================================================================
// Google OAuth goodies.
//==============================================================================
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2client = new OAuth2(clientID, clientSecret);

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
        if (token.aud !== clientID) {
          reject(new Error('ClientID mismatch.'));
        } else if (token.hd !== 'andrew.cmu.edu') {
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

lib.requireAdmin = lib.requireLoggedIn;

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
  if (req.session.isLoggedIn === true) {
    res.status(200);
    res.end('Logged in.\n');
  } else {
    res.status(403);
    res.end('Not logged in.\n');
  }
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

  verifyToken(req.body.token).then((token) => {
    console.log(token);

    var id = token.sub;
    req.session.isLoggedIn = true;
    req.session.ownerID = String(id);

    // Check db for that ID.
    // If not present, get some data from the Directory API to prefill and
    // insert into DB.

    res.status(200)
    res.end('Logged in.');
    return;
  }).catch((err) => {
    req.session.isLoggedIn = false;
    req.session.ownerID = '';
    res.status(500)
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
  req.session.ownerID = '';

  res.status(200);
  res.end('Logged out.\n');
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
  app.get('/auth/login/admin', handlers.login.get);

  app.post('/auth/login', handlers.login.post);
  app.post('/auth/logout', lib.requireLoggedIn, handlers.logout);

  console.log('Initialized application authentication library.');

  return lib;
};

module.exports = init;
