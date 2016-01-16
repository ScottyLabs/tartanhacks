/* @file Announcement.react.js
 * @brief Creates the Announcement React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var moment = require('moment');

var Glyphicon = require('react-bootstrap').Glyphicon;

var Actions = require('../actions/AnnouncementActions');

/* @brief Displays an announcement from the server, with an optional delete
 * button.  Should ideally be used in an AnnouncementList.
 */
class Announcement extends React.Component {
  constructor(props) {
    super(props);

    // Bind handlers.
    this.handleClick = this.handleClick.bind(this);
  }

  /* @brief Handles clicking the delete button. */
  handleClick() {
    Actions.delete(this.props.data.id);
  }

  /* @brief Rerenders the element. */
  render() {
    // Timestamp.
    var t = moment(new Date(parseInt(this.props.data.timestamp)));
    var timeStr = `${t.fromNow()} (${t.calendar()})`;
    var time = <span className="timestamp">{timeStr}</span>;

    // Deletion button.
    var btn = '';
    if (this.props.admin) {
      btn = (
        <button onClick={this.handleClick}>
        <Glyphicon glyph="trash" />
        </button>
      );
    }

    return (
      <li className="Announcement list-group-item">
        <span>{this.props.data.text}</span>{time}{btn}
      </li>
    );
  }
}

/* @prop {Boolean} admin Whether or not to render the delete button (can only
 * delete things in admin mode).
 * @prop {Object} data The raw announcement from the server.
 */
Announcement.propTypes = {
  'admin': React.PropTypes.bool,
  'data': React.PropTypes.shape({
    'id': React.PropTypes.string.isRequired,
    'text': React.PropTypes.string.isRequired,
    'timestamp': React.PropTypes.string.isRequired,
  }).isRequired,
};

Announcement.defaultProps = {
  'admin': false,
};

module.exports = Announcement;
