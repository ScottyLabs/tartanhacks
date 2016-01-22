/* @file status.js
 * @brief Defines the user status endpoints and makes a small status checking
 * library.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */

var db;

var registeredUsers = 0;
var acceptedUsers = 0;
var statuses = {};

//==============================================================================
// Internal libraries.
//==============================================================================

var status_to_code = function (status) {
  if (statuses.hasOwnProperty(status)) {
    return statuses[status];
  }
  return -1;
};

//==============================================================================
// Express handlers.
//==============================================================================
var handlers = {};

//==============================================================================
// GET/PUT /status
//==============================================================================

/* @brief Revert your status to UNREGISTERED. */
handlers.put = function (req, res) {
  var data = {};
  data.user_status = status_to_code('UNREGISTERED');
  req.session.user_status = 'UNREGISTERED';

  var query = 'UPDATE users SET ? WHERE google_id = ?';
  db.query(query, [data, req.session.ownerID]).then(() => {
    res.status(200);
    res.end('OK');
  }).catch((err) => {
    res.status(500);
    res.end(err);
  });
}

//==============================================================================
// POST /status/:id/:status
//==============================================================================
/* @brief Set someone's status to something. */
handlers.adminUpdate = function (req, res) {
  var status = status_to_code(req.params.status);
  if (status === -1) {
    res.status(404);
    res.end(`Status ${ req.params.status } is not a valid status.`);
  } else {
    data = {};
    data.user_status = status;
    req.session.user_status = req.params.status;

    var query = 'UPDATE users SET ? WHERE google_id = ?';
    db.query(query, [data, req.params.id]).then(() => {
      res.status(200);
      res.end('OK');
    });
  }
}

//==============================================================================
// PUT /status/mentor
//==============================================================================
handlers.mentor = {};
handlers.mentor.post = function (req, res) {
  data = {};
  data.user_status = status_to_code('MENTOR');
  req.session.user_status = 'MENTOR';

  var query = 'UPDATE users SET ? WHERE google_id = ?';
  db.query(query, [data, req.session.ownerID]).then(() => {
    res.status(200);
    res.end('OK');
  }).catch((err) => {
    res.status(500);
    res.end(err);
  });
};

/* @brief Initializes the status routes.
 * @param app Object The Express object to attach routes to.
 * @param dbConn Object A connection to a mySQL database.
 * @param atuh Object The authentication client library.
 */
var init = function (app, dbConn, auth) {
  db = dbConn;

  return db.query('SELECT * FROM user_statuses').then((rows) => {
    // Small sanity check because I bet we'll totally forget to do this on
    // deploy.
    if (rows.length !== 6) {
      throw new Error('The user_statuses database hasn\'t been loaded.');
    }

    // Load statuses.
    rows.forEach((row) => {
      statuses[row.name] = row.id;
    });

    // Revert to UNREGISTERED.
    app.put('/status', auth.requireLoggedIn, handlers.put);

    // As an admin, set anyone's status to something
    app.put('/status/:id/:status', auth.requireAdmin, handlers.adminUpdate);

    // Register yourself, if you're able to.
    app.post('/status/register', auth.requireLoggedIn);

    // Become a mentor.
    app.post('/status/mentor', auth.requireLoggedIn, handlers.mentor.post);

    console.log('Initialized /status routes.');
  });
};

module.exports = init;
