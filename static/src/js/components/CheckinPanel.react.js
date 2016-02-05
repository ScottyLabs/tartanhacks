/* @file Checkin.react.js
 * @brief Create the CheckinPanel React component.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */
'use strict';

var React = require('react');

var {Button, Input, Table} = require('react-bootstrap');
var LoginButton = require('./LoginButton.react');

var UserStatusStore = require('../stores/UserStatusStore');

var api = require('../api/status');

class CheckinPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'loggedIn': false,
      'status': '',
      'registration_data': {},
      'users': [],
      'filter': '',
    };

    this.updateAuth = this.updateAuth.bind(this);

    this.reloadTimer = -1;
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  componentWillMount() {
    UserStatusStore.register(this.updateAuth);
    this.updateAuth();
  }

  componentWillUnmount() {
    UserStatusStore.deregister(this.updateAuth);
  }

  handleKeypress() {
    this.setState({
      'filter': this.refs['filter'].getValue(),
    });
    }

  /* @brief Gets auth state from the UserStatusStore. */
  updateAuth() {
    this.setState({
      'loggedIn': UserStatusStore.get().loggedIn,
      'status': UserStatusStore.get().status,
    });

    if (UserStatusStore.get().status === 'ADMIN') {
      var reload_stuff = () => {
        window.ajax.get('/api/status').then((data) => {
          this.setState({
            'users': data,
          })
        });

        api.get_registration_status().then((data) => {
          this.setState({
            'registration_data': data,
          })
        });
      };

      if (this.reloadTimer === -1) {
        this.reloadTimer = setInterval(reload_stuff, 5000);
      }

      reload_stuff();
    } else {
      if (this.reloadTimer !== -1) {
        clearInterval(reloadTimer);
        this.reloadTimer = -1;
      }
    }
  }

  render() {
    var f = new Fuse(this.state.users, {
      keys: ['first_name', 'last_name', 'andrewID']
    });

    var filtered = f.search(this.state.filter);

    filtered = filtered.map((elem) => {
      return (<tr key={`${elem.andrewID}`}>
      <td>{`${elem.first_name} ${elem.last_name} (${elem.andrewID})`}</td>
      <td>{`${elem.user_status}`}</td>
      <td><Button onClick={() => {
        ajax.put(`/api/status/checkin/${elem.google_id}`)
      }}>{'Check In'}</Button></td>
      </tr>);
    })

    var body;
    if (!this.state.loggedIn) {
      body = (
        <div>
          <p>{'Log in to register for TartanHacks!'}</p>
        </div>
      )
    } else {
      switch(this.state.status) {
        case 'MENTOR':
        case 'ADMIN': {
          body = (
            <div className={this.state.status}>
              <Table responsive bordered condensed>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{'Administrators'}</td>
                    <td>{this.state.registration_data.ADMIN}</td>
                  </tr>
                  <tr>
                    <td>{'Mentors'}</td>
                    <td>{this.state.registration_data.MENTOR}</td>
                  </tr>
                  <tr>
                    <td>{'Checked In'}</td>
                    <td>{this.state.registration_data.HACKER_CHECKED_IN}</td>
                  </tr>
                  <tr>
                    <td>{'Accepted'}</td>
                    <td>{this.state.registration_data.HACKER_ACCEPTED}</td>
                  </tr>
                  <tr>
                    <td>{'Waitlisted'}</td>
                    <td>{this.state.registration_data.HACKER_WAITLISTED}</td>
                  </tr>
                  <tr>
                    <td>{'Unregistered'}</td>
                    <td>{this.state.registration_data.UNREGISTERED}</td>
                  </tr>
                </tbody>
              </Table>
              <h2>{'Check In'}</h2>
              <form className="form-horizontal" onSubmit={(e) => e.preventDefault()}>
                <Input type="text" ref="filter" label="Filter"
                  labelClassName="col-xs-3"
                  wrapperClassName="col-xs-9"
                  onChange={this.handleKeypress}
                  value={this.state.filter} />
              </form>
              <Table responsive bordered condensed>
              <tbody>
              {filtered}
              </tbody>
              </Table>
            </div>
          );
          break;
        }
      }
    }

    return (
      <div className="CheckinPanel" >
        {body}
      </div>
           );
  }
}

module.exports = CheckinPanel;
