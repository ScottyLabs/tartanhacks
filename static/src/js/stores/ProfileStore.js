/* @file Profile.js
 * @brief Small store that holds profile state.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

var Store = require('./Store');

var data = {};

class ProfileStore extends Store {
  get() {
    return data;
  }
}

var store = new ProfileStore();
var load = require('../actions/ProfileActions').load;

store.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case types.PROFILE_LOAD: {
      data = action.data;
      break;
    }

    case types.PROFILE_UPDATE: {
      data = action.data;
      break;
    }

    case types.USER_STATUS_UPDATE: {
      load();
      break;
    }

    default:
      return;
  }

  store.changed();
});

module.exports = store;
