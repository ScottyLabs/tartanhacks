/* @file App.react.js
 * @brief Renders the app, a large container that holds all the other views and
 * does a small amount of routing.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');
var Profile = require('./Profile.react');
var Schedule = require('./Schedule.react');
var RegistrationPanel = require('./RegistrationPanel.react');
var FAQ = require('./FAQ.react');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: window.location.hash.substr(2).split('/')[0],
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(2).split('/')[0],
      });
    });
  }

  render() {
    var content;

    switch (this.state.route) {

      case 'profile': {
        content = <Profile />;
        break;
      }

      case 'schedule': {
        content = <Schedule />;
        break;
      }

      case 'register': {
        content = <RegistrationPanel />
        break;
      }

      case 'faq': {
        content = <FAQ />
        break;
      }

      default: {
        content = (
          <div id="leader">
            <p>TartanHacks is an annual, student hackathon run by <a href="http://scottylabs.org">ScottyLabs</a>.</p>
            <p>February 5-6, 2016</p>
            <p>Registration opens on January 22nd at 9pm</p>
            <p>Get ready by checking out our <a href="/crashcourse">CrashCourse</a>.</p>
          </div>);
      }
    }

    return (
      <div className="App">
        <ul className="links">
          <li><a href="#/">Home</a></li>
          <li><a href="#/schedule">Schedule</a></li>
          <li><a href="#/faq">FAQ</a></li>
          <li><a href="#/register">Register</a></li>
          <li><a href="#/profile">Profile</a></li>
        </ul>

        {content}
      </div>);
  }
}

module.exports = App;
