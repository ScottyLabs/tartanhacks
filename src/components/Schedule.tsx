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
    <section className="py-16 text-white m-auto font-bold text-center border-b-4 w-2/3" id="schedule">
    <h1 className='text-6xl mb-24'>Schedule</h1>
    <p className='text-4xl font-title'>...Coming Soon...</p>
    </section>
  );
}
