/* @file UserStatusStore.js
 * @brief Small store that holds user login and state.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

var Store = require('./Store');

var loggedIn = false;
var status = '';

class StatusStore extends Store {
  get() {
    return {
      'admin': status === 'ADMIN',
      'status': loggedIn ? status : 'LOGGED_OUT',
      'loggedIn': loggedIn,
    };
  }
}

var store = new StatusStore();

store.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case types.USER_STATUS_UPDATE: {
      loggedIn = action.data.loggedIn;
      status = action.data.status;
      break;
    }

    default:
      return;
  }

  store.changed();
});

module.exports = store;
