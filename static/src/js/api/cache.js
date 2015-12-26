/* @file cache.js
 * @brief Exposes a function to cache GETters for a certain amount of time.
 * Useful to prevent data from being pinged repeatedly unnecessarily.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

/* @brief Caches a getter function that doesn't take any parameters.
 *
 * @param getter Function that makes a server request and resolves into some
 * value.
 * @param timeout How long the cache should maintain a value before making a
 * fresh request (seconds).
 */
var cache = function (getter, timeout) {
  var MS_PER_SEC = 1000;

  // We invalidate the cache slightly before the timeout, so that requests every
  // `timeout` seconds will perform as expected.
  var time = timeout * MS_PER_SEC - 10;
  var val = null;

  // Guaranteed invalid date.
  var lastInvocation = Date.now() - time - 1;

  // A mediocre mutex, required to prevent cache hits while the request is
  // in-flight.
  var wait = false;
  var waiting = [];

  var queryCache = function () {
    if (wait) {
      return new Promise((resolve, reject) => {
        waiting.push({
          resolve: resolve,
          reject: reject,
        });
      });
    }

    wait = true;

    var cacheInvalid = Date.now() - lastInvocation > time;

    if (cacheInvalid) {
      return new Promise((resolve, reject) => {
        getter()
        .then((data) => {
          // Update cache.
          lastInvocation = Date.now();
          val = data;

          resolve(data);

          // Pass along to waiting threads.
          wait = false;
          waiting.forEach((w) => {
            w.resolve(val);
          });
          waiting = [];

        }).catch((err) => {

          reject(err);

          // Pass along to waiting threads.
          wait = false;
          waiting.forEach((w) => {
            w.reject(val);
          });
          waiting = [];

        });
      });
    } else {
      wait = false;
      console.assert(waiting.length === 0);
      // Immediately resolve.
      return new Promise((resolve) => { resolve(val); });
    }
  };

  return queryCache;
};

module.exports = cache;
