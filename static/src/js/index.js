/* @file index.js
 * @brief Application logic for the main TartanHacks page.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App.react');

ReactDom.render(<App />, document.getElementById('app'));
