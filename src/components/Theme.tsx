import Amplify from '../svg/Amplify';

export default function Theme() {
	return (
		<section
			className="w-2/3 text-center text-white m-auto border-b-4 text-lg md:text-xl pt-36 -mb-36"
			id="theme"
		>
			<h1 className="mt-16 text-xl md:text-6xl font-bold">
				Our previous theme...
			</h1>
			<div className="m-auto mt-16 mb-12">
				<Amplify />
			</div>
			<h1 className="mt-16 text-xl md:text-3xl font-bold">
				TartanHacks 2024:
			</h1>
			<p className="max-w-2xl m-auto mb-12">
				Think bigger and bolder, and let your small ideas amplify
				exponentially!
			</p>
		</section>
	);
}
