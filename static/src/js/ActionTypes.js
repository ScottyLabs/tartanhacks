/* @file ActionTypes.js
 * @brief Provides the action types for the Flux dispatcher.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';
var keyMirror = require('keymirror');

module.exports = keyMirror({
  // Announcements
  'ANNOUNCEMENT_CREATE': null,
  'ANNOUNCEMENT_CREATE_COMPLETE': null,
  'ANNOUNCEMENT_DELETE': null,
  'ANNOUNCEMENT_DELETE_COMPLETE': null,
  'ANNOUNCEMENT_LOAD': null,

});
