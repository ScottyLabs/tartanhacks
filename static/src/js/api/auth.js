/* @file auth.js
 * @brief Uses the Google API to log people in.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var scriptjs = require('scriptjs');

var loaded = false;
var gauth;

scriptjs('https://apis.google.com/js/platform.js', () => {

  window.gapi.load('auth2', function () {
    loaded = true;
    gauth = gapi.auth2.init({
      client_id: '896735026831-2bc35407elu3h5rfed6o4r65mv3nea3p.apps.googleusercontent.com',
      scope: 'email',
      hosted_domain: 'andrew.cmu.edu',
      fetch_basic_profile: false,
    });

    gauth.isSignedIn.listen((bool) => { console.log((bool) ? 'Logged in.' : 'Logged out.'); })
  });
});

var auth = {};


/* @brief Initiate login for a given andrewID. */
auth.login = function (andrewID) {
  if (!loaded) {
    console.log('FUCK OFF');
  }

  return gauth.signIn();
};

/* @brief Checks whether or not we're logged in. */
auth.isLoggedIn = function () {
  return gauth.isSignedIn.get();
};

auth.logout = function () {
  return gauth.signOut();
};

module.exports = auth;
window.th_auth = auth;
