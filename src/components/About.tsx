export default function About() {
	const aboutContent = `is the largest Hackathon at CMU! Organized by ScottyLabs, it's a 24-hour hackathon where participants from all over the country create innovative projects. This year, we are happy to be fully in person again! Come on over to hack, learn from our workshops and incredible speakers, and meet other hackers!`;

	const details = `Feb 7th-8th @ Carnegie Mellon University!`;

	return (
		<section className="pt-36 w-2/3 m-auto" id="about">
			<div className="flex py-12 border-t-4 border-b-4 -mb-36">
				<div className="text-white m-auto flex flex-col md:flex-row px-6">
					<div className="max-w-2xl text-lg text-center">
						<p className="text-lg md:text-xl">
							<span className="font-title">TartanHacks</span>{' '}
							{aboutContent}
						</p>
						<p className="mt-5 font-bold text-xl">{details}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

