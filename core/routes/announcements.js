/* @file announcements.js
 * @brief Defines the handlers for the announcement API endpoints.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var db;

//==============================================================================
// Express handlers
//==============================================================================
var handlers = {};

//==============================================================================
// GET/POST/DELETE /announcements
//==============================================================================

/* @brief Return every announcement. */
handlers.get = function (req, res) {
  var query = 'SELECT * FROM announcements';
  db.query(query, [])
  .then((rows) => {
    var data = {};
    rows = rows.map((row) => {
      row.id = row.announcement_id;
      delete row.announcement_id;

      data[row.id] = row;
      return row;
    });

    res.status(200);
    res.json(rows);
  }).catch((err) => {
    res.status(500);
    res.end(`${ err }\n`);
  });
};

/* @brief Insert a new announcement. */
handlers.post = function (req, res) {
  req.checkBody('text').notEmpty();
  req.checkBody('text').isLength(1, 500);

  var errs = req.validationErrors();
  if (errs) {
    res.status(400);
    res.end(`Error: malformed request.  Details: ${ JSON.stringify(errs) }.\n`);
    return;
  }

  var query = 'INSERT INTO announcements (text, timestamp) VALUES (?, ?)';
  db.query(query, [req.body.text, String(Date.now())])
  .then((data) => {
    res.status(200);
    res.json(data.insertId);
  }).catch((err) => {
    res.status(400);
    res.end(`${ err }\n`);
  });
};

/* @brief Delete the announcement with the given id. */
handlers.delete = function (req, res) {
  var query = 'DELETE FROM announcements WHERE announcement_id = ?';
  db.query(query, [req.params.id])
  .then(() => {
    res.status(200);
    res.end('Successfully deleted announcement.\n');
  }).catch((err) => {
    res.status(404);
    res.end(`${ err }\n`);
  });
};

/* @brief Initializes the announcement routes.
 * @param app Object The Express object to attach routes to.
 * @param dbConn Object A connection to a mySQL database.
 */
var init = function (app, dbConn, auth) {
  db = dbConn;

  // Attach handlers.
  app.get('/announcements', handlers.get);
  app.post('/announcements', auth.requireAdmin, handlers.post);
  app.delete('/announcements/:id', auth.requireAdmin, handlers.delete);

  console.log('Initialized /announcements routes.');
};

module.exports = init;
