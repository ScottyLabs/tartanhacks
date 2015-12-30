/* @brief AuthenticationActions.js
 * @brief All the actions related to authentication. (Intended to be callbacks
 * from the auth library).
 *
 * @author Oscar  Bezi (bezi@scottylabs)
 */
'use strict';

var Dispatcher = require('../Dispatcher');
var types = require('../ActionTypes');

var reportLogin = function () {
  Dispatcher.dispatch({
    'type': types.AUTH_LOGIN,
  });
};

var reportAdminLogin = function () {
  Dispatcher.dispatch({
    'type': types.AUTH_LOGIN_ADMIN,
  });
};

var reportLogout = function () {
  Dispatcher.dispatch({
    'type': types.AUTH_LOGOUT,
  });
};

module.exports = {
  'reportLogin': reportLogin,
  'reportAdminLogin': reportAdminLogin,
  'reportLogout': reportLogout,
};
