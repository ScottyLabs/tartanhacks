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

//==============================================================================
// Announcement
//==============================================================================

/* @brief Displays an announcement from the server, with an optional delete
 * button.  Should ideally be used in an AnnouncementList.
 */
class Announcement extends React.Component {
  constructor(props) {
    super(props);

    this.style = {
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

    // Bind handlers.
    this.onClick = this.onClick.bind(this);
  }

  /* @brief Handles clicking the delete button. */
  onClick() {
    this.props.delete(this.props.data.announcement_id);
  }

  /* @brief Rerenders the element. */
  render() {
    // Timestamp.
    var timeStr = fmt(new Date(this.props.data.timestamp));
    var time = (<span style={[this.style.span]}>({timeStr})</span>);

    // Deletion button.
    var btn = '';
    if (this.props.admin) {
      btn = (<button onClick={ this.onClick.bind(this) }>(x)</button>);
    }

    return (
      <li style={[this.style.li]}>
      <p style={[this.style.p]}> {this.props.data.text} {time} </p>{btn}
      </li>
    );
  }
}

/* @prop {Boolean} admin Whether or not to render the delete button (can only
 * delete things in admin mode).
 * @prop {Object} data The raw announcement from the server.
 * @prop {Function} delete Takes no parameters, deletes the current item.
 */
Announcement.propTypes = {
  admin: React.PropTypes.bool,
  data: React.PropTypes.object.isRequired,
  delete: React.PropTypes.func,
};

Announcement.defaultProps = {
  admin: false,
  delete: () => {},
};

Announcement = Radium(Announcement);

//==============================================================================
// AnnouncementList
//==============================================================================
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

class AnnouncementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();

    // Bind handlers.
    this.makeAnnouncement = this.makeAnnouncement.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
  }

  /* @brief The state to revert to when we have no data. */
  defaultState() {
    return { announcements: [], };
  }


  /* @brief Gets clean data from the server. */
  getData() {
    api.getAll()
    .then((data) => {
      this.setState({
        announcements: data,
      });
    }).catch(common.err(this));
  }

  /* @brief Enables the timer that updates the element. */
  componentWillMount() {
    this.getData();
    this.timer = setInterval(this.getData.bind(this), api.updateRate);
  }

  /* @brief Cleans up the timer that updates the element. */
  componentWillUnmount() {
    clearInterval(timer);
  }

  /* @brief Handles a child deleting an announcement. */
  deleteAnnouncement(id) {
    api.delete(id)
    .then(this.getData.bind(this))
    .catch(common.err(this));
    var a = this.state.announcements.filter((a) => !(a.announcement_id === id));
    this.setState({
      announcements: a,
    });
  }

  /* @brief Handles form submission. */
  makeAnnouncement(e) {
    e.preventDefault();
    if (this.refs.input.value !== '') {
      api.create(this.refs.input.value)
      .then(() => {
        this.refs.input.value = '';
        this.getData();
      })
      .catch(common.err(this));
    }
  }

  /* @brief Rerenders the element. */
  render() {
    var list = this.state.announcements.map((a) => (
      <Announcement key={a.announcement_id} data={a} admin={this.props.admin} delete={this.deleteAnnouncement}/>
    ));

    list = (<ul style={[AnnouncementList_style.ul]}>{list}</ul>);

    if (this.state.announcements.length === 0) {
      list = (<p>No announcements yet.  Stay tuned!</p>);
    }

    var form = '';
    if (this.props.admin) {
      form = (
        <form onSubmit={this.makeAnnouncement}>
        <textarea ref="input" placeholder="New announcement." />
        <button type="submit">Submit</button>
        </form>
      );
    }

    return (
      <div>
      <h2 style={[AnnouncementList_style.h2]}>Announcements</h2>
      {list}
      {form}
      </div>
    );
  }
}

AnnouncementList.propTypes = { admin: React.PropTypes.bool, };
AnnouncementList.defaultProps = { admin: false, };

AnnouncementList = Radium(AnnouncementList);
module.exports = AnnouncementList;
