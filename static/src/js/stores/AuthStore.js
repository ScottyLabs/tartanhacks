/* @file AuthStore.js
 * @brief Small store that holds auth state.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

var Store = require('./Store');

var loggedIn = false;
var admin = false;

class AuthStore extends Store {
  get() {
    return {
      'admin': admin,
      'loggedIn': loggedIn,
    };
  }
}

var store = new AuthStore();

store.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case types.AUTH_LOGIN: {
      loggedIn = true;
      admin = false;
      break;
    }

    case types.AUTH_LOGIN_ADMIN: {
      loggedIn = true;
      admin = true;
      break;
    }

    case types.AUTH_LOGOUT: {
      loggedIn = false;
      admin = false;
      break;
    }

    default:
      return;
  }

  store.changed();
});

module.exports = store;
