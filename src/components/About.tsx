export default function About() {
  const aboutContent = `
  TartanHacks is the largest hackathon at Carnegie Mellon! ⭐ Organized by ScottyLabs, it's a 24-hour hackathon where participants from all over the country create innovative projects. This year, TartanHacks 2023 - Disruption is coming Feb 3-4, 2023 and is bigger than ever with completely in-person events, workshops, and talks with a lineup of sponsors, prizes, and swag that will cause quite the disruption 😎
  Come on over to hack, learn new concepts through our workshops, and meet other hackers! ✨
  `;

  return (
    <section className="py-16" id="about">
      <div className="flex">
        <div className="text-beige m-auto flex flex-col md:flex-row px-6">
          <h3 className="text-2xl mb-4 md:mr-8 text-yellow text-center md:text-left">
            About
          </h3>
          <div className="max-w-xl text-lg">
            <p>{aboutContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
