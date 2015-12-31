/* @file profile.js
 * @brief Provides the API wrappers for the profile endpoints.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';
var ajax = require('./ajax');
var auth = require('./auth');

var profile = {};

/* @brief The maximum length of an profile field. */
profile.maxLength = 100;

/* @brief Returns a promise that resolves into the user's profile. */
profile.get = function () {
  return auth.requireLoggedIn(() => ajax.get('/api/profile'));
};

/* @brief Update the profile with the given data. */
profile.update = function (data) {
  return auth.requireLoggedIn(() => ajax.put('/api/profile', data));
};

module.exports = profile;
