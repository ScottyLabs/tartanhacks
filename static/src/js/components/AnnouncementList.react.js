/* @file announcements.js
 * @brief Creates the React components associated with announcements, and
 * exports the ones we want to create on the fly.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var moment = require('moment');

var Input = require('react-bootstrap').Input;
var ListGroup = require('react-bootstrap').ListGroup;
var Well = require('react-bootstrap').Well;
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var Announcement = require('./Announcement.react');

var AnnouncementStore = require('../stores/AnnouncementStore');
var AuthStore = require('../stores/AuthStore');
var Actions = require('../actions/AnnouncementActions');

var api = require('../api/announcements');

class AnnouncementList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'announcements': [],
      'value': '',
      'admin': false,
    };

    // Bind handlers.
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);

    this.updateAnnouncements = this.updateAnnouncements.bind(this);
    this.updateAuth = this.updateAuth.bind(this);

    this.mkAnnouncement = this.mkAnnouncement.bind(this);
  }

  componentWillMount() {
    AnnouncementStore.register(this.updateAnnouncements);
    AuthStore.register(this.updateAuth);
    this.updateAuth();
    this.updateAnnouncements();
  }

  componentWillUnmount() {
    AnnouncementStore.deregister(this.updateAnnouncements);
    AuthStore.deregister(this.updateAuth);
  }

  /* @brief Get new announcements from the AnnouncementStore. */
  updateAnnouncements() {
    this.setState({'announcements': AnnouncementStore.get(),});
  }

  /* @brief Gets auth state from the AuthStore. */
  updateAuth() {
    this.setState({'admin': AuthStore.get().admin,});
  }

  /* @brief Handles form submission. */
  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.value !== '') {
      Actions.create(this.state.value);
      this.setState({
        'value': '',
      });
    }
  }

  /* @brief Handles keypresses. */
  handleKeypress() {
    if (this.refs.input.getValue().length <= api.maxLength) {
      this.setState({
        'value': this.refs.input.getValue(),
      });
    }
  }

  /* @brief Returns whether the the input has a valid input. */
  validationState() {
    if (this.state.value === '') {
      return;
    }

    return this.state.value.length <= api.maxLength ? 'success' : 'error';
  }

  /* @brief Returns the built form. */
  buildForm() {
    var button = <Button type="submit"><Glyphicon glyph="upload" /></Button>;
    var form = (
      <form onSubmit={this.handleFormSubmit}>
      <Input
        type="text"
        buttonAfter={button}
        ref="input"
        onChange={this.handleKeypress}
        placeholder={`New announcement (max ${api.maxLength} characters).`}
        bsStyle={this.validationState()}
        value={this.state.value}/>
      </form>
    );

    return form;
  }

  /* @brief Curried function with two parameters that builds an <Announcement />
   *
   * @param {bool} admin Whether or not to render the delete button.
   * @param {Object} announcement The data from the server.
   */
  mkAnnouncement(announcement) {
      announcement.id = String(announcement.id);

      return (
        <Announcement
        key={announcement.id}
        data={announcement}
        admin={this.state.admin}
        temp={announcement.temp} />
      );
  }

  /* @brief Rerenders the element. */
  render() {
    var body;
    if (this.state.announcements.length === 0) {
      body = <p>{'No announcements yet. Stay tuned!'}</p>;
    } else {
      body = (
        <ListGroup componentClass="ul">
        {this.state.announcements.map(this.mkAnnouncement)}
        </ListGroup>
      );
    }
    var form = this.state.admin ? this.buildForm() : '';

    return (
      <Well
        className="AnnouncementList"
        bsSize="small"
      >
      <h2>{'Announcements'}</h2>
      {body}
      {form}
      </Well>
    );
  }
}

module.exports = AnnouncementList;
