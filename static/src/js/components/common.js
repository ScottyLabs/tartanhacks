/* @file common.js
 * @brief Things that all components may find useful.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

module.exports = {
  /* @brief Generic React error handler.
   *
   * Resets the controller to a default initial state.
   *
   * @param toBind The Component to bind the handler to.
   * @return The error handler function, now properly bound.
   */
  err: function (toBind) {
    // Help catch binding bugs in components.
    console.assert(toBind !== null && toBind !== undefined, 'Null component.');
    console.assert(
      toBind.setState !== null && toBind.setState !== undefined,
      'Attempting to bind to something that isn\'t a React component.');

    return (function (err) {
      if (this.defaultState) {
        this.setState(this.defaultState());
      }

      if (err) {
        console.log(err);
      }
    }).bind(toBind);
  },
};
