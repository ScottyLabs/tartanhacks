/* @file LoginButton.react.js
 * @brief Create the LoginButton React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var {Button} = require('react-bootstrap');
var UserStatusStore = require('../stores/UserStatusStore');
var {login, logout} = require('../api/auth');

class LoginButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'loggedIn': false,
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
    this.setState({'loggedIn': UserStatusStore.get().loggedIn,});
  }

  render() {
    if (this.state.loggedIn) {
      return (<div className="LoginButton"><Button onClick={logout}>{'Logout'}</Button></div>);
    } else {
      return (<div className="LoginButton"><Button onClick={login}>{'Login'}</Button></div>);
    }
  }
}

module.exports = LoginButton;
