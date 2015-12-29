/* @file admin.js
 * @brief Application logic for the TartanHacks administration panel.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var AnnouncementList = require('./components/AnnouncementList.react');

ReactDom.render(<AnnouncementList admin />, document.getElementById('announcements'));
