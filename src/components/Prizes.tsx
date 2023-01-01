function Prize({
  name,
  description,
  prize,
}: {
  name: string;
  description: string;
  prize: string;
}) {
  return (
    <div className="border-2 border-gray-700 p-4 rounded-lg">
      <h3 className="text-lg text-blue">{name}</h3>
      <p>{description}</p>
      <p className="text-sm mt-2 text-right">{prize}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="py-16" id="prizes">
      <div className="flex">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-yellow">Prizes</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 max-w-6xl">
            <Prize
              name="Spiciest Meme Award"
              description="Post the spicest memes on Discord."
              prize="What Do You Meme? Card Game"
            />
            <Prize
              name="First Penguin Award"
              description="Inspired by Randy Pausch's last lecture."
              prize="Super cute penguin plushies"
            />
            <Prize
              name="Best Travel Hack"
              description="Awarded to the team with the best travel-related hack!"
              prize="4 travel packs with film camera and travel essentials"
            />
            <Prize
              name="Scott Krulcik Grand Prize"
              description="The prize for the most impressive hack at TartanHacks 2023."
              prize="$2000 per team"
            />
            <Prize
              name="Spiciest Meme Award"
              description="Post the spicest memes on Discord."
              prize="What Do You Meme? Card Game"
            />
            <Prize
              name="First Penguin Award"
              description="Inspired by Randy Pausch's last lecture."
              prize="Super cute penguin plushies"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
