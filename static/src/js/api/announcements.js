/* @file announcements.js
 * @brief Provides the API wrappers for the announcements endpoints.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var ajax = require('./ajax');
var cache = require('./cache');

var announcements = {};

/* @brief How often the announcement cache will preserve the announcements. */
announcements.updateRate = 1; // Seconds.

/* @brief Returns a promise that resolves into a list of all announcements. */
announcements.getAll = cache(function () {
  return ajax.get('/api/announcements');
}, 1);

/* @brief Makes a new announcement with the given text. */
announcements.create = function (text) {
  return ajax.post('api/announcements', { text: text, });
};

/* @brief Deletes the announcement with the given id. */
announcements.delete = function (id) {
  return ajax.delete(`/api/announcements/${ id }`);
};

module.exports = announcements;
