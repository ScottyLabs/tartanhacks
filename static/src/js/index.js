'use strict';

var api = require('./api/announcements');
var $ = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var AnnouncementList = require('./components/announcements');

ReactDom.render((<AnnouncementList />), document.getElementById('announcements'));
