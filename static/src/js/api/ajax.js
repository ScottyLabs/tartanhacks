/* @file ajax.js
 * @brief Sets up jquery to enable authenticating endpoints and a little error
 * wrapper, then exposes a small ajax library.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var $ = require('jquery');

$.ajaxSetup({
  xhrFields: {
    withCredentials: true,
  }
});

/* @brief Wraps the jQuery AJAX error into a standard form. */
var errorWrap = function (callback) {
  return function (err) {
    callback({
      message: err.responseText,
      code: err.status,
    });
  };
};

/* @brief Promisified GET request. */
var get = function (url) {
  return new Promise((resolve, reject) => {
    $.get(url)
    .done(resolve)
    .fail(errorWrap(reject));
  });
};

/* @brief Promisified POST request. */
var post = function (url, data) {
  if (data === undefined) { data = {}; }

  return new Promise((resolve, reject) => {
    $.post(url, data)
    .done(resolve)
    .fail($.errorWrap(reject));
  });
};

/* @brief Promisified PUT request. */
var put = function (url, data) {
  if (data === undefined) { data = {}; }

  return new Promise((resolve, reject) => {
    $.ajax(url, {
      data: data,
      method: 'PUT',
    })
    .done(resolve)
    .fail($.errorWrap(reject));
  });
};

/* @brief Promisified DELETE request. */
var del = function (url) {
  return new Promise((resolve, reject) => {
    $.ajax(url, {
      method: 'DELETE',
    })
    .done(resolve)
    .fail($.errorWrap(reject));
  });
};

module.exports = {
  get : get,
  post: post,
  put: put,
  delete: del,
};
