/* @file Store.js
 * @brief Exposes a basic Flux store prototype.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var EventEmitter = require('events').EventEmitter;

var CHANGE = 'change';

class Store extends EventEmitter {
  constructor() {
    super();
  }

  changed() {
    this.emit(CHANGE);
  }

  register(callback) {
    this.on(CHANGE, callback);
  }

  deregister(callback) {
    this.removeListener(CHANGE, callback);
  }
}

module.exports = Store;
