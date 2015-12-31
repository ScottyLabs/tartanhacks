/* @file server.js
 * @brief Core server for the TartanHacks back-end.
 * @author Oscar Bezi (oscar@bezi.io)
 */
'use strict';

// Get configuration information.
var config = require('./config');

// Initialize express.
var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({
  secret: 'DEBUGGING_APP_SECRET',
  resave: false, // Make sure to double-check this once we switch stores.
  saveUninitialized: false
}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true,
}));

var validator = require('express-validator');
app.use(validator());

var morgan = require('morgan');
app.use(morgan('dev'));

// Database connection and final initialisation.
var mysql = require('promise-mysql');
mysql.createConnection({
  host: config.sql.url,
  user: config.sql.user,
  password: config.sql.pass,
  database: config.sql.dbname,
}).then((conn) => {
  console.log("Successfully connected to the SQL database.");
  var db = conn;

  var auth = require('./routes/auth')(app, db);

  // Miscellaneous routes.
  require('./routes/announcements')(app, db, auth);
  require('./routes/profile')(app, db, auth);

  // Start the server.
  return app.listen(config.port);
}).then(() => {
  console.log(`TartanHacks back-end listening on port ${ config.port }.`);
});

// Don't catch errors, we want the server to crash on error.
