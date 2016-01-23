/* @file config.js
 * @brief Configuration details for the TartanHacks back-end.
 * @author Oscar Bezi (bezi@scottylabs.org)
 */

module.exports = {
  'port': 5040,
  'sql': {
    'url': 'localhost',
    'user': 'root',
    'pass': 'mysqlpass',
    'dbname': 'th_2016',
  },
  'google': {
    'clientID': '896735026831-i2d8bp6qcqb65alta00daatpl2pd7a5g.apps.googleusercontent.com',
    'clientSecret': 'tGHNpU-Azy_QF-9dYQlej1jl',
  },
  // Should always be an admin.
  'MASTER_ADMIN': 'odb',
};
