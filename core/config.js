/* @file config.js
 * @brief Configuration details for the TartanHacks back-end.
 * @author Oscar Bezi (bezi@scottylabs.org)
 */

module.exports = {
  'port': 5040,
  'sql': {
    'url': 'unix.bezi.io',
    'user': 'th',
    'pass': '8xpnYKdFNgTg',
    'dbname': 'th_2016',
  },
  'google': {
    'clientID': '896735026831-554nd2fjkhovad8c8cf817uatb9ni00i.apps.googleusercontent.com',
    'clientSecret': 'Ojbz2hrIsv9JH5_fMa6JkrGL',
  },
  // Should always be an admin.
  'MASTER_ADMIN': 'odb',
};
