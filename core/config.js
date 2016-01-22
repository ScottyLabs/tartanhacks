/* @file config.js
 * @brief Configuration details for the TartanHacks back-end.
 * @author Oscar Bezi (bezi@scottylabs.org)
 */

module.exports = {
  'port': 5010,
  'sql': {
    'url': 'unix.bezi.io',
    'user': 'th',
    'pass': '8xpnYKdFNgTg',
    'dbname': 'th_2016',
  },
  'google': {
    // The pass checked in should only be for unix.bezi.io
    'clientID': '896735026831-2bc35407elu3h5rfed6o4r65mv3nea3p.apps.googleusercontent.com',
    'clientSecret': '8jkVKn1ylghCs2SIqwKfBBKe',
  },
  // Should always be an admin.
  'MASTER_ADMIN': 'odb',
};
