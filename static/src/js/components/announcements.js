/* @file announcements.js
 * @brief Creates the React components associated with announcements, and
 * exports the ones we want to create on the fly.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var Radium = require('radium');
var moment = require('moment');
var common = require('./common.js');
var api = require('../api/announcements');

var Input = require('react-bootstrap').Input;
var ListGroup = require('react-bootstrap').ListGroup;
var Well = require('react-bootstrap').Well;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Button = require('react-bootstrap').Button;

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
      li: {
        position: 'relative',
        padding: '0.7em 36px 0.7em 1em',
      },
      btn: {
        background: 'none',
        borderStyle: 'none none none solid',
        borderWidth: '1px',
        height: '100%',
        width: 'auto',
        position: 'absolute',
        right: '0',
        top: '0',
      },
      timeSpan : {
        position: 'absolute',
        bottom: '0.2em',
        left: '4em',
        color: common.colors.textHilight,
        fontSize: '0.5em',
        fontStyle: 'italic',
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
    var t = moment(new Date(this.props.data.timestamp));
    var timeStr = `${t.fromNow()} (${t.calendar()})`;
    var time = (<span style={[this.style.timeSpan]}>{timeStr}</span>);

    // Deletion button.
    var btn = '';
    if (this.props.admin) {
      btn = (
        <button style={[this.style.btn]} onClick={this.onClick}>
          <Glyphicon glyph="trash" />
        </button>
      );
    }

    return (
      <li className="list-group-item" style={[this.style.li]}>
      <span>{this.props.data.text}</span>{time}{btn}
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
class AnnouncementList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState();

    this.style = {
      h2: {
        textAlign: 'center',
      },
      textarea: {
        width: '100%',
        height: '100%',
        border: 'none',
      }
    };

    // Bind handlers.
    this.makeAnnouncement = this.makeAnnouncement.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /* @brief The state to revert to when we have no data. */
  defaultState() {
    return { announcements: [], value: '',};
  }

  /* @brief Gets clean data from the server. */
  getData() {
    api.getAll()
    .then((data) => {
      data.sort((a, b) => {
        return (new Date(b.timestamp)) - (new Date(a.timestamp));
      });
      this.setState({
        announcements: data,
        value: this.state.value,
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
      value: this.state.value,
    });
  }

  /* @brief Handles form submission. */
  makeAnnouncement(e) {
    e.preventDefault();
    if (this.state.value !== '') {
      api.create(this.state.value)
      .then(() => {
        this.setState({
          announcements: this.state.announcements,
          value: '',
        });
        this.getData();
      })
      .catch(common.err(this));
    }
  }

  /* @brief Handles keypresses. */
  onChange() {
    this.setState({
      announcements: this.state.announcements,
      value: this.refs.input.getValue(),
    });
  }

  validationState() {
    if (this.state.value === '') return;
    return (this.state.value.length <= api.maxLength) ? 'success' : 'error';
  }

  /* @brief Rerenders the element. */
  render() {
    var form = '';
    if (this.props.admin) {
        var button = (<Button type="submit"><Glyphicon glyph="upload" /></Button>);
      form = (
        <form onSubmit={this.makeAnnouncement}>
        <Input
          type="text"
          buttonAfter={button}
          style={[this.style.textarea]}
          ref="input"
          onChange={this.onChange}
          placeholder={`New announcement (max ${api.maxLength} characters).`}
          bsStyle={this.validationState()}
          value={this.state.value}/>
        </form>
      );
    }

    var list = this.state.announcements.map((a) => (
      <Announcement
        key={a.announcement_id}
        data={a}
        admin={this.props.admin}
        delete={this.deleteAnnouncement} />
    ));

    list = (<ListGroup componentClass="ul">{list}</ListGroup>);

    if (this.state.announcements.length === 0) {
      list = (<p>No announcements yet.  Stay tuned!</p>);
    }

    return (
      <Well bsSize="small">
      <h2 style={[this.style.h2]}>Announcements</h2>
      {list}
      {form}
      </Well>
    );
  }
}

AnnouncementList.propTypes = { admin: React.PropTypes.bool, };
AnnouncementList.defaultProps = { admin: false, };

AnnouncementList = Radium(AnnouncementList);
module.exports = AnnouncementList;
