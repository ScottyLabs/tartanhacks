import HackingBeginsCell from '../svg/HackingBegins';
import HackingEndsCell from '../svg/HackingEnds';
import ScheduleTitle from '../svg/Schedule';

function Block({
  title,
  time,
  location,
}: {
  title: string;
  time: string;
  location: string;
}) {
  return (
    <div
      className={`rounded flex flex-col md:flex-row w-full justify-between gap-2 md:gap-4`}
    >
      <div className="border-white border-2 rounded-md py-8 px-4 w-full md:w-1/4 flex-col justify-center hidden md:flex">
        <p className="text-center font-bold md:text-lg">{time}</p>
      </div>
      <div className="border-white border-2 rounded-md py-8 px-4 w-full md:w-3/4 flex flex-col">
        <h1 className="text-center font-bold text-xl">{title}</h1>
        <p className="text-center">{location}</p>
        <p className="text-center md:hidden">{time}</p>
      </div>
    </div>
  );
}

function Day({ date, children }: { date: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <h1 className='font-bold w-20 text-xl'>{date}</h1>
      <div className="flex flex-col flex-1 align-middle gap-6">{children}</div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section
      className="pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto flex flex-col gap-24"
      id="schedule"
    >
      <ScheduleTitle className="m-auto w-full" />
      <div className="text-white m-auto w-full">
        <Day date="Feb 2.">
          <Block
            title="Check In Begins + Sponsorship Expo"
            time="3:45 PM"
            location="Connan"
          />
          <Block
            title="Please arrive by this time"
            time="4:00 PM"
            location="McConomy"
          />
          <Block
            title="Opening Ceremony"
            time="4:30 - 5:30 PM"
            location="McConomy"
          />
          <HackingBeginsCell className="-mt-[8%] lg:-mt-[6%] -mb-[12%] z-10 w-[129%] -ml-[12%] relative" />
          <Block
            title="Team Formation Mixer"
            time="5:30 - 6:30 PM"
            location="Danforth"
          />
          <Block
            title="Dinner"
            time="6:30 - 7:30 PM"
            location="Rangos"
          />
          <Block
            title="Po-Shen Loh Talk"
            time="7:30 - 8:30 PM"
            location="Danforth"
          />
          <Block
            title="Hacker Activity + Karaoke + Midnight Snack"
            time="11:30 PM - 2:00 AM"
            location=""
          />
        </Day>
        <div className='h-[1px] opacity-50 bg-white w-full my-4' />
        <Day date="Feb 3.">
          <Block
            title="Breakfast"
            time="10:00 - 10:30 AM"
            location="Rangos"
          />
          <Block
            title="Yaser Sheikh Talk"
            time="10:30 - 11:30 AM"
            location="Danforth"
          />
          <Block
            title="Lunch"
            time="12:30 - 1:30 PM"
            location="Rangos"
          />
          <HackingEndsCell className="-mt-[10%] -mb-[12%] z-10 w-[132%] -ml-[13%] relative" />
          <Block
            title="Judging Expo"
            time="5:30 - 6:30 PM"
            location="Rangos"
          />
          <Block
            title="Dinner"
            time="6:30 - 7:30 PM"
            location="Rangos"
          />
          <Block
            title="Closing Ceremony"
            time="8:00 - 9:00 PM"
            location="McConomy"
          />
        </Day>
      </div>
    </section>
  );
}
