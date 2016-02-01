/* @file FAQ.react.js
 * @brief The TartanHacks FAQs.
 *
 * @author Oscar Bezi (bezi@scottylabs)
 */

var React = require('react');

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FAQ">
        <h2>Frequently Asked Questions</h2>
        <div id="/faq/00">
          <a href="#/faq/00"><b>Can I register with a team?</b></a>
          <p>
            Currently we're having everyone sign up as an individual for the
            event, and we'll have you specify your team later on.  Don't worry,
            if you already have a team chosen, you'll still be able to work with
            them.
          </p>
        </div>

        <div id="/faq/01">
          <a href="#/faq/01"><b>How many people can we have per team?</b></a>
          <p>
          Up to 4 people are allowed.
          </p>
        </div>

        <div id="/faq/02">
          <a href="#/faq/02"><b>If I don't have a team before the event, can I still participate?</b></a>
          <p>
        Absolutely! We've set aside some time at the beginning of event for helping hackers create teams.
          </p>
        </div>

        <div id="/faq/03">
          <a href="#/faq/03"><b>I got in, but a few of my team members were put on the waitlist. Will they be able to participate?</b></a>
          <p>
        Hackers are accepted individually, so we are unable to guarantee that
        all members of your team will get in. However, if they're on the waitlist, there's still hope! See the next question.
          </p>
        </div>

        <div id="/faq/04">
          <a href="#/faq/04"><b>Is there a way to get off of the waitlist?</b></a>
          <p>
            We will be letting hackers off the waitlist on a first-come,
            first-served basis.  Historically, many people have gotten off the
            waitlist.
          </p>
        </div>

        <div id="/faq/05">
          <a href="#/faq/05"><b>How much does it cost to participate in TartanHacks?</b></a>
          <p>
            Nothing. TartanHacks is free for all current CMU students.
          </p>
        </div>

        <div id="/faq/06">
          <a href="#/faq/06"><b>I'm not a CS major, can I still join?</b></a>
          <p>
            Yes! All majors and programs, even if they aren't technical, can
            participate in TartanHacks. We're running a series of talks called
            <a href="/crashcourse">Crash Course</a> the weekends leading up to
            TartanHacks to help you brush up your skills.
          </p>
        </div>

        <div id="/faq/07">
          <a href="#/faq/07"><b>Are we limited to software projects or are hardware hacks allowed?</b></a>
          <p>
        Hardware hacks are certainly allowed! We don't restrict projects to
        software, though you will need to bring your own hardware/materials.
          </p>
        </div>

        <div id="/faq/08">
          <a href="#/faq/08"><b>Who runs TartanHacks?</b></a>
          <p>
            TartanHacks is run by ScottyLabs, a student organization at Carnegie
            Mellon that develops apps for CMU and runs educational events, like
            TartanHacks. ScottyLabs isn't affiliated with any academic department,
            and all of our funding comes from our sponsor companies.
          </p>
        </div>

        <div id="/faq/09">
          <a href="#/faq/09"><b>What if I need help during the hackathon?</b></a>
          <p>
            We'll have a team of mentors on hand who are experts in many common
            technologies. They'll be able to answer your questions, help you debug,
            and help you along with anything you might not be confident with. They
            can't make your project for you, but they are always there to help!
          </p>
        </div>

        <div id="/faq/10">
          <a href="#/faq/10"><b>What can I prepare before the hackathon?</b></a>
          <p>
        You can come up with an idea and know what you'd like to use before the
        event. However, you are not allowed to pre-write any code for your hack.
            Furthermore, any libraries you use must be open-source.
          </p>
        </div>
    </div>);
  }
}

module.exports = FAQ;
