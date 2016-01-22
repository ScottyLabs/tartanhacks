/* @file status.js
 * @brief Defines the user status endpoints and makes a small status checking
 * library.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */

var db;

var NUM_TO_ACCEPT = 350;

var statuses = {};
var count = {};

//==============================================================================
// Internal libraries.
//==============================================================================

var status_to_code = function (status) {
  if (statuses.hasOwnProperty(status)) {
    return statuses[status];
  }
  return -1;
};

var reload_numbers = function () {
  // clear object.
  Object.keys(count).forEach((c) => { count[c] = 0;});
  var query = 'SELECT name, count(user_status) AS count FROM (users INNER JOIN user_statuses ON user_status = user_statuses.id) GROUP BY name';
  return db.query(query).then((rows) => {
    rows.forEach((row) => {
      count[row.name] = row.count;
    });

    Object.keys(statuses).forEach((status) => {
      if (!count.hasOwnProperty(status)) {
        count[status] = 0;
      }
    });
  });
}

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

    reload_numbers();
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
      reload_numbers();
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
    reload_numbers();
    res.status(200);
    res.end('OK');
  }).catch((err) => {
    res.status(500);
    res.end(err);
  });
};

handlers.register = {};

/* @brief Gets info about that. */
handlers.register.get = function (req, res) {
  reload_numbers().then(() => {
    res.status(200);
    res.json(count);
  });
}

/* @brief Tries to register. */
handlers.register.post = function (req, res) {
  if (req.session.user_status !== 'UNREGISTERED') {
    res.status(403);
    res.send(`Unable to register with status ${req.session.user_status}`);
    return;
  }

  var status = '';
  if (count['HACKER_ACCEPTED'] >= NUM_TO_ACCEPT) {
    status = 'HACKER_WAITLISTED';
  } else {
    status = 'HACKER_ACCEPTED';
  }

  count[status]++;

  data = {};
  data.user_status = status_to_code(status);
  data.registration_timestamp = String(Date.now());
  req.session.user_status = status;

  var query = 'UPDATE users SET ? WHERE google_id = ?';
  db.query(query, [data, req.session.ownerID]).then(() => {
    res.status(200);
    res.end('OK');
    reload_numbers();
  }).catch((err) => {
    res.status(500);
    res.end(err);
  });
}

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

    return reload_numbers();
  }).then(() => {
    // Revert to UNREGISTERED.
    app.put('/status', auth.requireLoggedIn, handlers.put);

    // As an admin, set anyone's status to something
    app.put('/status/:id/:status', auth.requireAdmin, handlers.adminUpdate);

    // Register yourself, if you're able to.
    app.get('/status/register', auth.requireAdmin, handlers.register.get);
    app.post('/status/register', auth.requireLoggedIn, handlers.register.post);

    // Become a mentor.
    app.post('/status/mentor', auth.requireLoggedIn, handlers.mentor.post);

    console.log('Initialized /status routes.');
  });
};

module.exports = init;
