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
var AnnouncementList = require('./AnnouncementList.react');
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

      case 'mentors': {
        content = <AnnouncementList />
        break;
      }

      default: {
        content = (
        <div>
          <div id="leader">
            <p>TartanHacks is an annual, student hackathon run by <a href="http://scottylabs.org">ScottyLabs</a>.</p>
            <p>February 5-6, 2016</p>
            <p>Registration opens on January 22nd at 9pm</p>
            <p>Get ready by checking out our <a href="/crashcourse">CrashCourse</a>.</p>
          </div>

          <div id="sponsors">
            <h3>Our Sponsors</h3>
            <h4>Gold Sponsor</h4>
            <img src="imgs/bny-logo.png"  alt="BNY Mellon" />
            <hr />

            <h4>Silver Sponsors</h4>
            <ul className="silver">
                <li>Capital One</li>
                <li>Facebook</li>
            </ul>
            <hr />

            <h4>Bronze Sponsors</h4>
            <ul className="bronze">
                <li>Bloomberg</li>
                <li>Duolingo</li>
                <li>GoDaddy</li>
                <li>Google</li>
            </ul>
            <hr />

            <h4>Supporting Sponsors</h4>
            <ul>
                <li>APT</li>
                <li>Venture for America</li>
            </ul>
          </div>
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
          <li><a href="#/mentors">Mentors</a></li>
        </ul>

        {content}
      </div>);
  }
}

module.exports = App;
