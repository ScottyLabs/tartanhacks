/* @file Profile.react.js
 * @brief Creates the Profile React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');

var {Input, FormControls, Button} = require('react-bootstrap');
var LoginButton = require('./LoginButton.react');

var UserStatusStore = require('../stores/UserStatusStore');
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
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentWillMount() {
    UserStatusStore.register(this.updateAuth);
    ProfileStore.register(this.updateProfile);
  }

  componentWillUnmount() {
    clearTimeout(this.timingTyper);
    UserStatusStore.deregister(this.updateAuth);
    ProfileStore.deregister(this.updateProfile);
  }

  updateAuth() {
    this.setState({'loggedIn': UserStatusStore.get().loggedIn});
  }

  updateProfile() {
    this.setState({'profile': ProfileStore.get()});
  }

  handleKeypress(refName) {
    return () => {
      if (this.refs[refName].getValue().length <= api.maxLength) {
        // Only update the server after we've stopped typing for a second.
        clearTimeout(this.timingTyper);
        this.timingTyper = setTimeout(() => {
          updateStore(data);
        }, 1000);

        var data = this.state.value;
        data[refName] = this.refs[refName].getValue();
        this.setState({
          'value': data,
        });
      }
    };
  }

  handleCheckbox() {
    var data = this.state.value;
    data.in_resume_drop = !this.refs.in_resume_drop.getChecked();
    this.setState({
      'value': data,
    });
    updateStore(data);
  }

  mkForm() {
    var explanation = "This information both lets us know about who comes to our events, and allows us to share your resume and hack information to all of our sponsors in one spot!  Sponsors often reach out to students after the hackathon for employment opportunities.  If you want to opt-out of this, please check the button below."
    var getValue = (propName) => this.state.value[propName] !== undefined ? this.state.value[propName] : this.state.profile[propName];
    var getInput = (propName, label) => {
      return (
        <Input
          type="text"
          ref={propName}
          label={label}
          labelClassName="col-xs-3"
          wrapperClassName="col-xs-9"
          onChange={this.handleKeypress(propName)}
          value={getValue(propName)} />
      );
    }

    return (
    <form className="form-horizontal" onSubmit={(e) => {e.preventDefault()}}>
      <FormControls.Static label="AndrewID" labelClassName="col-xs-3" wrapperClassName="col-xs-9" value={this.state.profile.andrewID} />
      {getInput('first_name', 'First Name')}
      {getInput('middle_name', 'Middle Name')}
      {getInput('last_name', 'Last Name')}
      {getInput('preferred_email', 'Email')}
      {getInput('student_class', 'Class')}
      {getInput('student_major', 'Major')}
      {getInput('personal_url', 'URL')}
      {getInput('github', 'Github')}
      {getInput('linkedin', 'LinkedIn')}
      <Button className="nice-btn"><a href="https://www.dropbox.com/request/ywCAo8WiRUId5tItNqD2">Upload your resume</a></Button>
      <FormControls.Static wrapperClassName="col-xs-offset-3 col-xs-9" value="(Note, Jake Zimmerman is the Director of Technology at ScottyLabs.  He'll take good care of your resumes.)" />
      <FormControls.Static wrapperClassName="col-xs-offset-3 col-xs-9" value={explanation} />
      <Input
        type="checkbox"
        ref="in_resume_drop"
        label="I don't want to share my information."
        wrapperClassName="col-xs-offset-3"
        onChange={this.handleCheckbox}
        checked={!getValue('in_resume_drop')} />
    </form>
    );
  }

  render() {
    var body;
    if (!this.state.loggedIn) {
      body = (
        <div>
          <p>{'Log in to see your profile.'}</p>
        </div>
      );
    } else if (Object.keys(this.state.profile).length !== 0) {
      body = this.mkForm();
    } else {
      body = 'Loading. . .';
    }

    return (
      <div className="Profile" >
        <h2>{'Profile'}</h2>
        {body}
          <LoginButton />
      </div>
    );
  }
}

module.exports = Profile;
