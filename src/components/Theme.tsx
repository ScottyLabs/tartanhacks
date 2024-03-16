import Amplify from '../svg/Amplify';

export default function Theme() {
	return (
		<section
			className="w-2/3 text-center text-white m-auto border-b-4 text-lg md:text-xl pt-36 -mb-36"
			id="theme"
		>
			<h1 className="mt-16 text-xl md:text-6xl font-bold">
				This year&apos;s theme is...
			</h1>
			<div className="m-auto mt-96 mb-12">
				<Amplify />
			</div>
			<p className="max-w-2xl m-auto mb-6">
				Make your ideas louder and heard across scales. It&apos;s about
				transforming whispers into roars, taking those sparks of
				creativity and turning them into blazing beacons of change.
				Whether it&apos;s a subtle improvement on an existing technology
				or a groundbreaking new concept, we encourage you to think
				audaciously and expansively.
			</p>
			<p className="max-w-2xl m-auto mb-12">
				Think bigger and bolder, and let your small ideas amplify
				exponentially!
			</p>
		</section>
	);
}
