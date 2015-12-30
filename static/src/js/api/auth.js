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
var ajax = require('./ajax');
var callbacks = require('../actions/AuthenticationActions');

var gauth;

//==============================================================================
// Internal functions that maintain state.
//==============================================================================
/* @brief Resolves into whether or not we're logged in. */
var isLoggedIn = () => new Promise((resolve) => {
  ajax.get('/api/auth/login').then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false);
  });
});

/* @brief Resolves into whether or not we're logged in as an admin. */
var isAdmin = () => new Promise((resolve) => {
  ajax.get('/api/auth/login/admin').then(() => {
    resolve(true);
  }).catch(() => {
    resolve(false);
  });
});


var onLogin = () => {
  var me = gauth.currentUser.get();
  var token = me.getAuthResponse().id_token;
  ajax.post('/api/auth/login', {'token': token}).then(() => {
    return isAdmin();
  }).then((admin) => {
    if (admin) {
      callbacks.reportAdminLogin();
    } else {
      callbacks.reportLogin();
    }
  });
};

var onLogout = () => {
  ajax.post('/api/auth/logout').then(callbacks.reportLogout);
};

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
    gauth.isSignedIn.listen((login) => {
      if (login) {
        onLogin();
      } else {
        onLogout();
      }
    });
  });
});

//==============================================================================
// Public API
//==============================================================================
var auth = {};

/* @brief Wraps a function or promise to only execute if the user is logged in.
 * Optionally can provide an error handler.
 */
auth.requireLoggedIn = (fn, err) => isLoggedIn().then((loggedIn) => {
  if (loggedIn) {
    return fn();
  } else if (err) {
    return err();
  }
  throw new Error('Not logged in.');
});

/* @brief Wraps a function or promise to only execute if the user is logged in
 * as an admin.  Optionally can provide an error handler.
 */
auth.requireAdmin = (fn, err) => isAdmin().then((loggedIn) => {
  if (loggedIn) {
    return fn();
  } else if (err) {
    return err();
  }
  throw new Error('Not logged in as admin.');
});

/* @brief Initiate login sequence. */
auth.login = () => {
  if (gauth) {
    gauth.signIn();
  }
};

/* @brief Logs out. */
auth.logout = () => {
  if (gauth) {
    gauth.signOut();
  }
};

window.auth = auth;
module.exports = auth;
