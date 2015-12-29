/* @file auth.js
 * @brief Uses the Google API to log people in.
 *
 * At the moment, this is a a very basic proof of concept of auth.  It's fine
 * that I checked in that client ID since it's keyed to only unix.bezi.io source
 * domain.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var scriptjs = require('scriptjs');
var gauth;

/* @brief Load the Google client library. */
scriptjs('https://apis.google.com/js/platform.js', () => {
  window.gapi.load('auth2', () => {
    gauth = window.gapi.auth2.init({
      'client_id': '896735026831-2bc35407elu3h5rfed6o4r65mv3nea3p.apps.googleusercontent.com',
      'scope': 'email',
      'hosted_domain': 'andrew.cmu.edu',
      'fetch_basic_profile': false,
    });

    // proof of concept
    gauth.isSignedIn.listen((bool) => {
      console.log(bool ? 'Logged in.' : 'Logged out.');
    });
  });
});

var auth = {};

/* @brief Initiate sequence. */
auth.login = gauth.signIn;

/* @brief Checks whether or not we're logged in. */
auth.isLoggedIn = gauth.isSignedIn.get;

/* @brief Logs us out. */
auth.logout = gauth.signOut;

module.exports = auth;
