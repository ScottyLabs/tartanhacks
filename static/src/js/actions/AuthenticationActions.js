/* @brief AuthenticationActions.js
 * @brief All the actions related to authentication. (Intended to be callbacks
 * from the auth library).
 *
 * @author Oscar  Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

/* @brief Log auth status.
 *
 * @param {Object} status The auth status, as an object with boolean keys
 * 'login' and 'admin'.
 */
var authStatus = function (state) {
  Dispatcher.dispatch({
    'type': types.AUTH_STATUS_UPDATE,
    'data': state,
  });
};

module.exports = {
  'authStatus': authStatus,
};
