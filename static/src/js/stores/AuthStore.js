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
    case types.AUTH_STATUS_UPDATE: {
      loggedIn = action.data.login;
      admin = action.data.admin;
      break;
    }

    default:
      return;
  }

  store.changed();
});

module.exports = store;
