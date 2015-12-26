/* @file auth.js
 * @brief Defines the routes for the authentication end points in the API, as
 * defined in the auth spec in api.md.
 *
 * @author Oscar Bezi (oscar@bezi.io)
 */
'use strict';

var db;
var bcrypt = require('bcrypt-nodejs');

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
  req.checkBody('email').notEmpty();
  req.checkBody('password').notEmpty();

  var errs = req.validationErrors();
  if (errs) {
    res.status(400);
    res.end(`Error: ${ JSON.stringify(errs) }.\n`);
    return;
  }

  var query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [req.body.email])
  .then((rows) => {
    if (rows.length !== 1) {
      res.status(404);
      throw new Error('Email not present in our database.');
    }

    var passHash = rows[0].pass_hash;
    if (bcrypt.compareSync(req.body.password, passHash)) {
      req.session.isLoggedIn = true;
      req.session.ownerID = rows[0].owner_id;
      res.status(200);
      res.end('Logged in.\n');
    } else {
      res.status(403);
      throw new Error('Email/Password combo not valid.');
    }
  }).catch((err) => {
    res.end(`${ err }\n`);
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

//==============================================================================
// POST /auth/signup
//==============================================================================
/* @brief Signs up a user. */
handlers.signup = function (req, res) {
  req.checkBody('email').isEmail();
  req.checkBody('password').notEmpty();
  req.checkBody('fname').notEmpty();
  req.checkBody('lname').notEmpty();
  req.checkBody('companyName').notEmpty();

  var errs = req.validationErrors();
  if (errs) {
    res.status(400);
    res.end(`Error: malformed request.  Details: ${ JSON.stringify(errs) }.\n`);
    return;
  }

  var query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [req.body.email])
  .then((rows) => {
    if (rows.length !== 0) {
      throw new Error('Email already present in our database.');
    } else {
      query = 'INSERT INTO users (owner_id, email, pass_hash, fname, lname, company_name) VALUES (NULL, ?, ?, ?, ?, ?)';
      var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
      var vals = [req.body.email, hash, req.body.fname, req.body.lname, req.body.companyName];
      return db.query(query, vals);
    }
  }).then(() => {
    res.status(200);
    res.end(`Sucessfully added user ${ req.body.email }.\n`);
  }).catch((err) => {
    res.status(403);
    res.end(`${ err }\n`);
  });
};

//==============================================================================
// GET/PUT/DELETE /auth/me
//==============================================================================
handlers.me = {};

/* @brief Returns user account information. */
handlers.me.get = function (req, res) {
  var query = 'SELECT * FROM users WHERE owner_id = ?';
  db.query(query, [req.session.ownerID])
  .then((rows) => {
    if (rows.length !== 1) {
      throw new Error('Email not present in our database.');
    }

    var data = {
      email: rows[0].email,
      fname: rows[0].fname,
      lname: rows[0].lname,
      companyName: rows[0].company_name,
    };

    res.status(200);
    res.json(data);
  }).catch((err) => {
    res.status(403);
    res.end(`${ err }\n`);
  });
};

/* @brief Updates a user. */
handlers.me.put = function(req, res) {
  res.status(500);
  res.end('ERR_UNIMPLEMENTED');
};

/* @brief Deletes a user. */
handlers.me.delete = function (req, res) {
  var query = 'DELETE FROM users WHERE owner_id = ?';
  db.query(query, [req.session.ownerID])
  .then(() => {
    req.session.isLoggedIn = false;
    req.session.ownerID = '';
    res.status(200);
    res.send('Successfully deleted account.\n');
  }).catch((err) => {
    res.status(403);
    res.end(`${ err }\n`);
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
  // app.get('/auth/login', handlers.login.get);

  // app.post('/auth/login', lib.requireLoggedOut, handlers.login.post);
  // app.post('/auth/logout', lib.requireLoggedIn, handlers.logout);

  // app.post('/auth/signup', lib.requireLoggedOut, handlers.signup);

  // app.get('/auth/me', lib.requireLoggedIn, handlers.me.get);
  // app.put('/auth/me', lib.requireLoggedIn, handlers.me.put);
  // app.delete('/auth/me', lib.requireLoggedIn, handlers.me.delete);

  console.log('Initialized application authentication library.');

  return lib;
};

module.exports = init;
