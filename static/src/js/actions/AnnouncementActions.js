/* @file AnnouncementActions.js
 * @brief All actions that are related to announcements.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var api = require('../api/announcements');
var types = require('../ActionTypes');

/* @brief Loads fresh announcements from the server into the AnnouncementStore.
 * @param {Object} Set of announcements from the server.
 */
var loadAnnouncements = function () {
  api.getAll().then((announcements) => {
    Dispatcher.dispatch({
      'type': types.ANNOUNCEMENT_LOAD,
      'data': announcements,
    });
  });
};

/* @brief Makes a new announcement with the content 'text'.
 * @param {string} text The content of the announcement.
 */
var createAnnouncement = function (text) {
  var timestamp = String(Date.now());
  var tempID = `${timestamp}::${text}`;
  console.log('Creating announcment with text:: ');
  console.log(text);
  var announcement = {
    'text': text,
    'timestamp': timestamp,
  };

  Dispatcher.dispatch({
    'type': types.ANNOUNCEMENT_CREATE,
    'id': tempID,
    'data': announcement,
  });

  api.create(text, timestamp).then((id) => {
    Dispatcher.dispatch({
      'type': types.ANNOUNCEMENT_CREATE_COMPLETE,
      'id': tempID,
      'newID': id,
      'success': true,
    });
  }).catch(() => {
    Dispatcher.dispatch({
      'type': types.ANNOUNCEMENT_CREATE_COMPLETE,
      'id': tempID,
      'success': false,
    });
  });
};

/* @brief Deletes an announcement with the id 'id'.
 * @param {string} id The announcement ID.
 */
var deleteAnnouncement = function (id) {
  Dispatcher.dispatch({
    'type': types.ANNOUNCEMENT_DELETE,
    'id': id,
  });

  api.delete(id).then(() => {
    Dispatcher.dispatch({
      'type': types.ANNOUNCEMENT_DELETE_COMPLETE,
      'id': id,
      'success': true,
    });
  }).catch(() => {
    Dispatcher.dispatch({
      'type': types.ANNOUNCEMENT_DELETE_COMPLETE,
      'id': id,
      'success': false,
    });
  });
};

module.exports = {
  'load': loadAnnouncements,
  'create': createAnnouncement,
  'delete': deleteAnnouncement,
};
