/* @file Schedule.react.js
 * @brief The TartanHacks schedule.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */

var React = require('react');

class Schedule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="Schedule">
        <h2>Schedule</h2>
        <ul>
            <li className="row">
                <h3 className="col-xs-12">Friday, 22 January 2016</h3>
                <div className="time col-xs-3">9pm</div>
                <div className="name col-xs-9">Priority registration</div>
                <p className="col-xs-9 col-xs-offset-3">
                    A primary goal of TartanHacks is to introduce people from
                    the CMU community to hacking and hacking culture,
                    regardless of background and experience level.  To
                    that end, we open registration for freshmen and female
                    hackers one hour early.
                </p>

                <div className="time col-xs-3">10pm</div>
                <div className="name col-xs-9">General registration</div>
                <p className="col-xs-9 col-xs-offset-3">
                    We invite the entire undergraduate CMU community to register
                    for TartanHacks.  There are 250 available spots, and
                    everyone else will be placed on our waitlist.  If you're on
                    the waitlist, just come to our check-in on February 5th and
                    you may be accepted then.
                </p>
            </li>
            <hr />
            <li className="row">
                <h3 className="col-xs-12">Friday, 5 February 2016</h3>
                <div className="time col-xs-3">5pm</div>
                <div className="name col-xs-9">Check-in</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Check-in for the hackathon begins outside Porter 100.  If
                    you do not check-in by 5:30pm, your spot may be given to
                    someone on the waitlist.
                </p>

                <div className="time col-xs-3">5:30pm</div>
                <div className="name col-xs-9">Waitlist check-in</div>
                <p className="col-xs-9 col-xs-offset-3">
                    We will begin admitting hackers from the waitlist.
                </p>

                <div className="time col-xs-3">6pm</div>
                <div className="name col-xs-9">Opening ceremony</div>
                <p className="col-xs-9 col-xs-offset-3">
                    The opening ceremony begins in Porter Hall 100.
                </p>

                <div className="time col-xs-3">7pm</div>
                <div className="name col-xs-9">Dinner</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Dinner will be served prior to hacking in Porter Hall.
                </p>

                <div className="time col-xs-3">7:30pm</div>
                <div className="name col-xs-9">Hacking officially starts</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Happy hacking!   At this time, the mentors will also begin
                    responding to mentor requests.
                </p>

                <div className="time col-xs-3">Midnight</div>
                <div className="name col-xs-9">Midnight snack</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Come enjoy a delicious midnight snack!
                </p>
            </li>
            <hr />
            <li className="row">
                <h3 className="col-xs-12">Saturday, 6 February 2016</h3>
                <div className="time col-xs-3">7:30am</div>
                <div className="name col-xs-9">Breakfast</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Recharge from a long night of hacking with a healthy
                    breakfast.
                </p>

                <div className="time col-xs-3">Noon</div>
                <div className="name col-xs-9">Lunch</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Grab some lunch, then power through the rest of your hack!
                </p>

                <div className="time col-xs-3">5pm</div>
                <div className="name col-xs-9">Dinner</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Time is running out, but that doesn't mean you shouldn't
                    eat.
                </p>

                <div className="time col-xs-3">6pm</div>
                <div className="name col-xs-9">Hacking ends</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Pencils down.  Hacking is over, make sure that you've
                    submitted your hack if you want to demo!
                </p>

                <div className="time col-xs-3">6:30pm</div>
                <div className="name col-xs-9">Hack expo</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Take over Porter with us, and show off your hacks!  This is
                    when our judges will comb through all the hacks to select
                    our favorites.  However, make sure to see everyone else's
                    hack, too!
                </p>

                <div className="time col-xs-3">8pm</div>
                <div className="name col-xs-9">Closing ceremony</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Closing ceremony begins.  Top demos, prizes, and a wrap-up.
                </p>

                <div className="time col-xs-3">9pm</div>
                <div className="name col-xs-9">Hackathon ends</div>
                <p className="col-xs-9 col-xs-offset-3">
                    Go get some sleep.  You've earned it.
                </p>
            </li>
        </ul>

    </div>);
  }
}

module.exports = Schedule;
