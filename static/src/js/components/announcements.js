/* @file announcements.js
 * @brief Creates the React components associated with announcements, and
 * exports the ones we want to create on the fly.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var Radium = require('radium');
var fmt = require('dateformat');
var common = require('./common.js');
var api = require('../api/announcements');

var Announcement_style = {
  span: {
    color: common.colors.textHilight,
    fontSize: '0.8em',
    fontStyle: 'italic',
  },
  li: {
    padding: '3px',
    margin: '3px',
    borderRadius: '3px',
    background: common.colors.foreground,
  },
  p: {
    margin: '0',
    color: common.colors.text,
  },
};

var Announcement = Radium(React.createClass({
  onClick: function () {
    console.log(`Deleting announcement: ${ this.props.data.id }`);
    this.props.reload();
  },

  render: function () {
    var timeStr = fmt(new Date(this.props.data.time));
    return (
      <li style={[Announcement_style.li]}>
        <p style={[Announcement_style.p]}>
          {this.props.text} <span style={[Announcement_style.span]}>({timeStr})</span>
        </p>
        <button onClick={ this.onClick }>x</button>
      </li>
    );
  },
}));

var AnnouncementList_style = {
  ul: {
    listStyle: 'none',
    padding: '0',
    margin: '0 10px',
  },
  h2: {
    textAlign: 'center',
  },
};

var AnnouncementList = Radium(React.createClass({
  getInitialState: function () {
    return {
      announcements: [],
    };
  },

  reload: function () {
    // Get clean data from the server.
    api.getAll()
    .then((data) => {
      this.setState({
        announcements: data,
      });
    }).catch(common.err(this));
  },

  componentDidMount: function () {
    this.reload();
    setInterval(this.reload, announcements.updateRate * 1000);
  },

  render: function () {
    if (this.state.announcements.length === 0) {
      return (
        <div>
          <h2 style={[AnnouncementList_style.h2]}>Announcements</h2>
          <p>No announcements yet.  Stay tuned!</p>
        </div>
      );
    }

    var announcements = this.state.announcements
    .map((a) => (
      <Announcement key={a.announcement_id} data={a} reload = {this.reload} />
    ));

    return (
      <div>
        <h2 style={[AnnouncementList_style.h2]}>Announcements</h2>
        <ul style={[AnnouncementList_style.ul]}>{ announcements }</ul>
      </div>
    );
  },
}));

module.exports = AnnouncementList;
