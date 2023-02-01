import styles from './Schedule.module.css';

function TopBlock({
  title,
  time,
  area,
  location,
}: {
  title: string;
  time: string;
  area: string;
  location?: string;
}) {
  return (
    <div
      className={`border p-1 rounded border-blue text-gray-200 flex flex-col sm:flex-row justify-center items-center`}
      style={{ gridArea: area }}
    >
      <h1 className="text-lg text-center">{title}</h1>
      <p className="text-sm text-center text-gray-400 sm:ml-4 flex flex-row">
        <span>{time}</span>
        {location && (
          <>
            <span className="mx-2">⸱</span>
            <span>{location}</span>
          </>
        )}
      </p>
    </div>
  );
}

function Block({
  title,
  time,
  area,
  location,
}: {
  title: string;
  time: string;
  area: string;
  location: string;
}) {
  return (
    <div
      className={`border p-2 rounded border-gray-600 flex flex-col justify-center`}
      style={{ gridArea: area }}
    >
      <h1 className="text-lg text-center">{title}</h1>
      <p className="text-sm text-center text-gray-400 flex flex-row justify-center">
        <span>{time}</span>
        <span className="mx-2 block">⸱</span>
        <span>{location}</span>
      </p>
    </div>
  );
}

export default function Schedule() {
  return (
    <section className="py-16" id="schedule">
      <div className="py-16 pb-40" id="schedule">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-yellow">Schedule</h3>
          <div className="max-w-4xl m-auto">
            {/* For more flexibility, can use grid-template-areas */}
            <div className={`grid gap-x-2 gap-y-2 ${styles.grid}`}>
              <div
                className="text-center text-xl text-yellow mt-3"
                style={{ gridArea: 'feb3' }}
              >
                Feb 3
              </div>
              <div
                className="text-center text-xl text-yellow mt-3"
                style={{ gridArea: 'feb4' }}
              >
                Feb 4
              </div>
              <Block
                area="c10am"
                title="Breakfast"
                time="10am - 11am"
                location="Rangos Ballroom"
              />
              <Block
                area="c12pm"
                title="Talk with Jasmine Lawrence"
                time="12pm - 1pm"
                location="McConomy Auditorium"
              />
              <Block
                area="c1pm"
                title="Lunch"
                time="1pm - 2pm"
                location="Rangos Ballroom"
              />
              <Block
                area="c2pm"
                title="Q&A with Mike and Nehal"
                time="2pm - 3pm"
                location="McConomy Auditorium"
              />
              <TopBlock
                area="a3pm"
                title="Check In Starts"
                time="3pm"
                location="Connan Room"
              />
              <Block
                area="a430pm"
                title="Opening Ceremony"
                time="4:30pm - 5:30pm"
                location="McConomy Auditorium"
              />
              <TopBlock area="a530pm" title="Hacking Begins" time="5:30pm" />
              <TopBlock area="c530pm" title="Hacking Ends" time="5:30pm" />
              <Block
                area="a6pm2"
                title="Team Formation Mixer"
                time="6pm - 7pm"
                location="Connan Room"
              />
              <Block
                area="c6pm2"
                title="Dinner"
                time="6pm - 7pm"
                location="Rangos Ballroom"
              />
              <Block
                area="a7pm"
                title="RoboClub Talk"
                time="7pm - 8pm"
                location="Dowd"
              />
              <Block
                area="b7pm"
                title="Algorand Talk"
                time="7pm - 8pm"
                location="Connan"
              />
              <Block
                area="c7pm"
                title="Judging"
                time="7pm - 8pm"
                location="Rangos Ballroom"
              />
              <Block
                area="a8pm"
                title="Dinner"
                time="8pm - 9pm"
                location="Rangos Ballroom"
              />
              <Block
                area="c830pm"
                title="Closing Ceremony"
                time="8:30pm - 9:30pm"
                location="McConomy Auditorium"
              />
              <Block
                area="a9pm"
                title="Hacker Hangout"
                time="9pm - 11pm"
                location="Connan Room"
              />
              <Block
                area="a1130pm"
                title="Karaoke & Midnight Snack"
                time="11:30pm - 2:00am"
                location="Connan Room"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
