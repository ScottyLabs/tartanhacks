/* @file index.js
 * @brief Application logic for the main TartanHacks page.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var AnnouncementList = require('./components/AnnouncementList.react');
var Profile = require('./components/Profile.react');
var RegistrationPanel = require('./components/RegistrationPanel.react');

ReactDom.render(<Profile />, document.getElementById('profile'));
ReactDom.render(<RegistrationPanel />, document.getElementById('registration'));
