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
    'clientID': '896735026831-0jetl40m7r14djaedp3drbgifgt0cm11.apps.googleusercontent.com',
    'clientSecret': 'T2Omq8Jr41ZKklsNX6KnjGJV',
  },
  // Should always be an admin.
  'MASTER_ADMIN': 'odb',
};
