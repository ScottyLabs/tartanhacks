/* @file AnnouncementStore.js
 * @brief Exposes a Flux store that holds announcements.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

var Store = require('./Store');

/* @brief Set of announcements from the server. */
var serverAnnouncements = [];

/* @brief Set of dirty announcements, which haven't yet been confirmed from the
 * server.
 */
var dirtyCreated = {};
var dirtyDeleted = {};
var toSend = [];

class AnnouncementStore extends Store {
  get() {
    return toSend;
  }
}

var store = new AnnouncementStore();

store.dispatchToken = Dispatcher.register((action) => {
  switch (action.type) {
    case types.ANNOUNCEMENT_LOAD: {
      serverAnnouncements = action.data;
      break;
    }

    case types.ANNOUNCEMENT_CREATE: {
      dirtyCreated[action.id] = action.data;
      break;
    }

    case types.ANNOUNCEMENT_CREATE_COMPLETE: {
      if (action.success) {
        var data = dirtyCreated[action.id];
        data.id = action.newID;
        serverAnnouncements.push(data);

        delete dirtyCreated[action.id];
      } else {
        // Maybe try again instead of deleting?
        delete dirtyCreated[action.id];
      }
      break;
    }

    case types.ANNOUNCEMENT_DELETE: {
      dirtyDeleted[action.id] = true;
      break;
    }

    case types.ANNOUNCEMENT_DELETE_COMPLETE: {
      if (action.success) {
        serverAnnouncements = serverAnnouncements.filter((a) => a.id !== action.id);
      } else {
        // Maybe try again?
        dirtyDeleted[action.id] = false;
      }
      break;
    }

    default:
      return;
  }

  // Update internal store.
  toSend = serverAnnouncements.filter((a) => dirtyDeleted[a.id] !== true);

  toSend.sort((a, b) => parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10));

  store.changed();
});

// Start polling the server for updates.
var MS_PER_SECOND = 1000;
var load = require('../actions/AnnouncementActions').load;
// Start loading data.
load();

// Set up future updates.
setInterval(load, 5 * 60 * MS_PER_SECOND);

module.exports = store;
