export default function About() {
  const tartanhacks = `TartanHacks`
  const aboutContent = `is the largest Hackathon in Pittsburgh! Organized by ScottyLabs, it's a 24-hour hackathon where participants from all over the country create innovative projects. This year, we are happy to be fully in person again! Come on over to hack, learn from our workshops and incredible speakers, and meet other hackers!`;

  const details = `Feb 2nd-3rd @ Carnegie Mellon University!`

  return (
    <section className="py-16 border-t-4 border-b-4 w-2/3 m-auto" id="about">
      <div className="flex">
        <div className="text-white m-auto flex flex-col md:flex-row px-6">
          <div className="max-w-2xl text-lg text-center">
              <p className="text-xl"><span className="font-title">TartanHacks</span> {aboutContent}</p>
            <p className="mt-5 font-bold text-xl">{details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
