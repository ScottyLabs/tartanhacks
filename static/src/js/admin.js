'use strict';

var React = require('react');
var ReactDom = require('react-dom');
var AnnouncementList = require('./components/announcements');

ReactDom.render((<AnnouncementList admin={true} />), document.getElementById('announcements'));
