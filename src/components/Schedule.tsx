// import HackingBeginsCell from '../svg/HackingBegins';
// import HackingEndsCell from '../svg/HackingEnds';
import ScheduleTitle from '../svg/Schedule';

/*
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
		<div className="rounded flex flex-col md:flex-row w-full justify-between gap-2 md:gap-4">
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
			<h1 className="font-bold w-20 text-xl">{date}</h1>
			<div className="flex flex-col flex-1 align-middle gap-6">
				{children}
			</div>
		</div>
	);
} */

export default function Schedule() {
	return (
		<section
			className="pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto flex flex-col gap-1"
			id="schedule"
		>
			<ScheduleTitle className="m-auto w-full" />
			<h1 className="mt-16 text-center text-white text-3xl md:text-3xl font-bold gap-1">
				Coming soon!
			</h1>
		</section>
	);
}
