export default function About() {
  const aboutContent = `
    TartanHacks is the largest hackathon at Carnegie Mellon! Organized by ScottyLabs, it's a 36-hour hackathon where participants from all over the country create innovative projects. This year, TartanHacks will be fully in person. Come on over to hack, learn new concepts through our virtual workshops, and meet other hackers!    
  `;

  return (
    <section className="py-16" id="about">
      <div className="flex">
        <div className="text-beige m-auto flex flex-row">
          <h3 className="text-2xl mr-8 text-yellow">About</h3>
          <div className="max-w-xl text-lg">
            <p>{aboutContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
