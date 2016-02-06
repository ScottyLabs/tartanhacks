/* @file announcements.js
 * @brief Creates the React components associated with announcements, and
 * exports the ones we want to create on the fly.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var moment = require('moment');

var {Input, ListGroup, Button, Glyphicon} = require('react-bootstrap');

var Announcement = require('./Announcement.react');
var LoginButton = require('./LoginButton.react');

var AnnouncementStore = require('../stores/AnnouncementStore');
var UserStatusStore = require('../stores/UserStatusStore');
var Actions = require('../actions/AnnouncementActions');

var api = require('../api/announcements');

class AnnouncementList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'announcements': [],
      'question': '',
      'location': '',
      'admin': true,
      'loggedIn': false,
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
    UserStatusStore.register(this.updateAuth);
    this.updateAuth();
    this.updateAnnouncements();
  }

  componentWillUnmount() {
    AnnouncementStore.deregister(this.updateAnnouncements);
    UserStatusStore.deregister(this.updateAuth);
  }

  /* @brief Get new announcements from the AnnouncementStore. */
  updateAnnouncements() {
    this.setState({'announcements': AnnouncementStore.get(),});
  }

  /* @brief Gets auth state from the UserStatusStore. */
  updateAuth() {
    this.setState({
      'admin': UserStatusStore.get().status !== 'MENTOR' && UserStatusStore.get().status !== 'ADMIN'  ,
      'loggedIn':  UserStatusStore.get().loggedIn,
    });
  }

  /* @brief Handles form submission. */
  handleFormSubmit(e) {
    e.preventDefault();
      Actions.create(this.state.question + ' - ' + this.state.location);
      this.setState({
        'question': '',
        'location': this.refs.location.getValue(),
      });
    }

  /* @brief Handles keypresses. */
  handleKeypress() {
      this.setState({
        'question': this.refs.question.getValue(),
        'location': this.refs.location.getValue(),
      });
  }

  /* @brief Returns whether the the input has a valid input. */
  validationState() {
    return '';
  }

  /* @brief Returns the built form. */
  buildForm() {
    var button = <Button className="nice-btn" type="submit">Submit a Mentor Request</Button>;
    var form = (
      <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
      <Input
        type="text"
        ref='question'
        label='Question'
        labelClassName="col-xs-3"
        wrapperClassName="col-xs-9"
        onChange={this.handleKeypress}
        value={this.state.question} />
      <Input
        type="text"
        ref='location'
        label='Location'
        labelClassName="col-xs-3"
        wrapperClassName="col-xs-9"
        onChange={this.handleKeypress}
        value={this.state.location} />
        {button}
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
        admin={!this.state.admin}
        temp={announcement.temp} />
      );
  }

  /* @brief Rerenders the element. */
  render() {
    var body;

    if (!this.state.loggedIn) {
      return <LoginButton />;
    }

    if (this.state.announcements.length === 0) {
      body = <p>{'No mentor requests yet. Stay tuned!'}</p>;
    } else {
      body = (
        <ListGroup componentClass="ul">
        {this.state.announcements.map(this.mkAnnouncement)}
        </ListGroup>
      );
    }
    var form = this.state.admin ? this.buildForm() : '';
    body = this.state.admin ? '' : body;

    return (
      <div className="AnnouncementList" >
      <h2>{'Mentor Requests'}</h2>
      {body}
      {form}
      </div>
    );
  }
}

module.exports = AnnouncementList;
