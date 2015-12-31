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

store.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case types.PROFILE_LOAD: {
      // fall-through
    }

    case types.PROFILE_UPDATE: {
      data = action.data;
      break;
    }

    default:
      return;
  }

  store.changed();
});

// Start loading data.
var load = require('../actions/ProfileActions').load;
load();

module.exports = store;
