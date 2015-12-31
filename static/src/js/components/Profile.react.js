/* @file Profile.react.js
 * @brief Creates the Profile React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');

var Well = require('react-bootstrap').Well;
var Input = require('react-bootstrap').Input;

var AuthStore = require('../stores/AuthStore');
var ProfileStore = require('../stores/ProfileStore');

var api = require('../api/profile');

var updateStore = require('../actions/ProfileActions').update;

/* @brief Displays a user profile, with an optional edit-mode. */
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'profile': {},
      'value': {},
      'loggedIn': false,
      'editing': false,
    };

    // Bind handlers.
    this.updateAuth = this.updateAuth.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

    this.mkForm = this.mkForm.bind(this);

    this.handleKeypress = this.handleKeypress.bind(this);
    this.validationState = this.validationState.bind(this);
  }

  componentWillMount() {
    AuthStore.register(this.updateAuth);
    ProfileStore.register(this.updateProfile);
  }

  componentWillUnmount() {
    AuthStore.deregister(this.updateAuth);
    ProfileStore.deregister(this.updateProfile);
  }

  updateAuth() {
    this.setState({'loggedIn': AuthStore.get().loggedIn});
  }

  updateProfile() {
    this.setState({'profile': ProfileStore.get()});
  }

  handleKeypress(refName) {
    return () => {
      if (this.refs[refName].getValue().length <= api.maxLength) {
        var data = this.state.value;
        data[refName] = this.refs[refName].getValue().trim();
        this.setState({
          'value': data,
        });
        updateStore(data);
      }
    };
  }

  validationState(refName) {
    if (this.state.value[refName] === undefined) {
      return null;
    }
   return this.state.profile[refName] === this.state.value[refName] ? null : 'warning';
  }

  mkForm() {
    var getValue = (propName) => this.state.value[propName] !== undefined ? this.state.value[propName] : this.state.profile[propName];
    return (
    <form className="form-horizontal">
      <Input
        type="text"
        ref="first_name"
        label="First Name"
        labelClassName="col-xs-2"
        wrapperClassName="col-xs-10"
        onChange={this.handleKeypress('first_name')}
        bsStyle={this.validationState('first_name')}
        value={getValue('first_name')} />
    </form>
    );
  }

  render() {
    var body = <p>{'Loading...'}</p>;

    if (!this.state.loggedIn) {
      body = <p>{'Log in to see your profile.'}</p>;
    } else if (Object.keys(this.state.profile).length !== 0) {
      body = this.mkForm();
    }

    return (
      <Well
        className="Profile"
        bsSize="small"
      >
      <h2>{'Profile'}</h2>
      {body}
      </Well>
    );
  }
}

module.exports = Profile;
