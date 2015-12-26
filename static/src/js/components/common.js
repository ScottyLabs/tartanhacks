/* @file common.js
 * @brief Common styling constants shared among all components, such as color
 * schemes.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

module.exports = {
  colors: {
    foreground: '#FFDC89',
    text: '#252525',
    textHilight: '#668DE5',
  },

  breakpoints: {
    mobile: 720,
    largest: 1080,
  },

  /* @brief Generic React error handler.
   *
   * Resets the controller to a default initial state.
   *
   * @param toBind The Component to bind the handler to.
   * @return The error handler function, now properly bound.
   */
  err: function (toBind) {
    console.assert(toBind !== null && toBind !== undefined);
    console.assert(toBind.setState !== null && toBind.setState !== undefined);
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
