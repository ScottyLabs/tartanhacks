/* @file profile.js
 * @brief Defines the handlers for profile API endpoints.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var db;

var getProfile = function (req) {
  var query = 'SELECT * FROM users WHERE google_id = ?';
  return db.query(query, [req.session.ownerID]).then((rows) => {
    if (rows.length !== 1) {
      throw new Error('Database error.');
    }

    return rows[0];
  });
}

//==============================================================================
// Express handlers
//==============================================================================
var handlers = {};

//==============================================================================
// GET/PUT /me
//==============================================================================

/* @brief Returns the user profile. */
handlers.get = function (req, res) {
  getProfile(req).then((data) => {
    delete data.is_admin;
    delete data.google_id;
    delete data.user_status;

    // Convert ints to bool
    data.in_resume_drop = data.in_resume_drop === 1;

    res.status(200);
    res.json(data);
  }).catch((err) => {
    res.status(500);
    res.send(err);
  });
};

handlers.put = function (req, res) {
  getProfile(req).then((data) => {
    req.checkBody('first_name').isLength(0, 100);
    req.checkBody('middle_name').isLength(0, 100);
    req.checkBody('last_name').isLength(0, 100);
    req.checkBody('preferred_email').isLength(0, 100);
    req.checkBody('student_major').isLength(0, 100);
    req.checkBody('student_class').isLength(0, 100);
    req.checkBody('personal_url').isLength(0, 100);
    req.checkBody('github').isLength(0, 100);
    req.checkBody('linkedin').isLength(0, 100);
    req.sanitize('in_resume_drop').toBoolean();

    var errs = req.validationErrors();
    if (errs) {
      res.status(400);
      res.end(`Error: malformed request.  Details: ${ JSON.stringify(errs) }.`);
      return;
    }

    var writeablePropNames = [
      'first_name',
      'middle_name',
      'last_name',
      'preferred_email',
      'student_major',
      'student_class',
      'personal_url',
      'in_resume_drop',
      'github',
      'linkedin',
    ];

    // Load info into data
    writeablePropNames.forEach((prop) => {
      data[prop] = (req.body[prop] !== undefined) ? req.body[prop] : data[prop];
    });

    var query = 'UPDATE users SET ? WHERE google_id = ?';
    return db.query(query, [data, req.session.ownerID]);
  }).then(() => {
    handlers.get(req, res);
  }).catch((err) => {
    res.status(500);
    res.send(err);
  });
};

/* @brief Initializes the profile routes.
 * @param app Object The Express object to attach routes to.
 * @param dbConn Object A connection to a mySQL database.
 * @param atuh Object The authentication client library.
 */
var init = function (app, dbConn, auth) {
  db = dbConn;

  // Attach handlers.
  app.get('/profile', auth.requireLoggedIn, handlers.get);
  app.put('/profile', auth.requireLoggedIn, handlers.put);

  console.log('Initialized /profile routes.');
};

module.exports = init;
