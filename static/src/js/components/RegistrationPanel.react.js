/* @file RegistrationPanel.react.js
 * @brief Create the RegistrationPanel React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');

var {Button} = require('react-bootstrap');
var LoginButton = require('./LoginButton.react');

var UserStatusStore = require('../stores/UserStatusStore');

class RegistrationPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'loggedIn': false,
      'status': ''
    };

    this.updateAuth = this.updateAuth.bind(this);
  }

  componentWillMount() {
    UserStatusStore.register(this.updateAuth);
    this.updateAuth();
  }

  componentWillUnmount() {
    UserStatusStore.deregister(this.updateAuth);
  }

  /* @brief Gets auth state from the UserStatusStore. */
  updateAuth() {
    this.setState({
      'loggedIn': UserStatusStore.get().loggedIn,
      'status': UserStatusStore.get().status,
    });
  }

  render() {
    var body;
    if (!this.state.loggedIn) {
      body = (
        <div>
          <p>{'Log in to register for TartanHacks!'}</p>
        </div>
      )
    } else {
      switch(this.state.status) {
        case 'UNREGISTERED': {
          body = (
            <div className={this.state.status}>
              <p>{'Welp, looks like you\'re logged in.'}</p>
              <Button>Become a mentor.</Button>
              <Button>Register as a hacker.</Button>
            </div>
          );
          break;
        }
        case 'ADMIN': {
          body = (
            <div className={this.state.status}>
              <p>{'Registration is: CLOSED|OPEN|PRIVILEGED'}</p>
            </div>
          );
          break;
        }
        case 'MENTOR': {
          body = (
            <div className={this.state.status}>
              <p>{'Thanks so much for being a mentor!  You should get email soon regarding the mentorship process.'}</p>
            </div>
          );
          break;
        }
        case 'HACKER_CHECKED_IN': {
          body = (
            <div className={this.state.status}>
              <p>{'You have been checked in.  Better get started hacking!'}</p>
            </div>
          );
          break;
        }
        case 'HACKER_ACCEPTED': {
          body = (
            <div className={this.state.status}>
              <p>{'Congrats!  You\'re in.  Get excited.'}</p>
            </div>
          );
          break;
        }
        case 'HACKER_WAITLISTED': {
          body = (
            <div className={this.state.status}>
              <p>{'Welp, looks like you\'re on the waitlist.'}</p>
            </div>
          );
          break;
        }
      }
    }

    return (
      <div className="RegistrationPanel" >
        <h2>Register</h2>
        {body}
        <LoginButton />
      </div>
           );
  }
}

module.exports = RegistrationPanel;
