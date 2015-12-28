/* @file index.js
 * @brief Application logic for the main TartanHacks page.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var AnnouncementList = require('./components/announcements');

require('./api/auth.js');

ReactDom.render((<AnnouncementList />), document.getElementById('announcements'));
