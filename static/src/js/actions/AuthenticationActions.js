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
 * @param {Object} status The user status.
 */
var update = function (state) {
  Dispatcher.dispatch({
    'type': types.USER_STATUS_UPDATE,
    'data': state,
  });
};

module.exports = {
  'update': update,
};
