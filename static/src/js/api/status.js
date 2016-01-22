/* @file status.js
 * @brief Provides the API wrappers for the status endpoints.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';
var ajax = require('./ajax');
var auth = require('./auth');

var status = {};

/* @brief The possible statuses for a user. */
status.user_statuses = [
  'UNREGISTERED',
  'ADMIN',
  'MENTOR',
  'HACKER_CHECKED_IN',
  'HACKER_ACCEPTED',
  'HACKER_WAITLISTED',
];

/* @brief Remove mentor or hacker status. */
status.revert_status = () => {
  return auth.requireLoggedIn(() => ajax.put('/api/status')).then(auth.update_status);
};

/* @brief Try to set our status. */
status.become_mentor = () => {
  return auth.requireLoggedIn(() => ajax.post('/api/status/mentor')).then(auth.update_status);
};

/* @brief Try and set someone else's status. */
status.set_status = (status, userID) => {
  return auth.requireAdmin(() => ajax.put(`/api/status/${ userID }/${ status }`)).then(auth.update_status);
};

/* @brief Get the registration status. */
status.register = () => {
  return auth.requireLoggedIn(() => ajax.post(`/api/status/register/`)).then(auth.update_status);
};

/* @brief Set the registration status. */
status.get_registration_status = () => {
  return auth.requireAdmin(() => ajax.get('/api/status/register'));
};

window.status_lib = status;
module.exports = status;
