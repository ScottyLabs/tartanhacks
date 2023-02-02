import Image from 'next/image';

function Speaker({
  imageUrl,
  name,
  subtitle,
  description,
}: {
  imageUrl: string;
  name: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex-col items-center md:flex-row flex md:items-start px-4">
      <img
        className="mb-2 md:mb-0 mr-5 w-36 flex-none rounded"
        src={imageUrl}
      />
      <div>
        <h4 className="text-xl text-blue">{name}</h4>
        <h5 className="text-lg mb-1">{subtitle}</h5>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <div className="py-16" id="speakers">
      <div className="flex">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-yellow">Speakers</h3>
          <div className="max-w-2xl space-y-12 py-8">
            <Speaker
              imageUrl="/speakers/mike.jpg"
              name="Mike Darweesh"
              subtitle="Co-Founder of Google Hangouts"
              description={`Michael Darweesh is an experienced software professional. He worked with Microsoft as a team lead on Mac Office and Windows DRM. Later, he joined the Mars Space Flight Facility to make mapping software for the rovers program. Then, he joined Google and co-founded the Hangouts team. His Pittsburgh startup experience includes two projects: Legalsifter, which brings ML to legal document processing, and Icebird Financial Corporation. Now, he mentors Pittsburgh talent and companies such as Gridwise and the Pittsburgh Knights. When he's not at the computer, he is playing with his cats, enjoying some pizza, or watching some hockey!`}
            />
            <Speaker
              imageUrl="/speakers/nehal.png"
              name="Nehal Gajjar"
              subtitle="CEO and Founder of iMetalx"
              description={`Nehal Gajjar is CEO and Founder of iMetalx, an innovative aerospace firm that develops deep tech solutions for defense. She has raised $20M+ in non-dilutive funding and has built three profitable startups. She holds a Bachelor's in Aerospace Engineering from Georgia Tech and an MBA in Finance and Strategy from CMU. Her expertise spans advanced technologies in aerospace, software, and renewable energy industries and she has led breakthrough innovations with the US Space Force, USAF, Siemens, Lockheed Martin, and Pratt Whitney. She enjoys competitive sailing, mountain biking, and martial arts in her spare time.`}
            />
            <Speaker
              imageUrl="/speakers/jasmine.jpg"
              name="Jasmine Lawrence"
              subtitle="Senior Product Manager at Everyday Robots"
              description={`Jasmine Lawrence is a Senior Product Manager at Everyday Robots, where they are building a new type of learning robot that can learn by itself to help with (almost) anything. Prior to this, she has worked at Facebook, Softbank Robotics America, and Microsoft. At 13, Jasmine founded EDEN BodyWorks to meet the need for affordable, natural hair and body care products that really work. Jasmine earned her Bachelor's in CS from Georgia Tech and her Master's in Human-Centered Design and Engineering at the University of Washington. She’s been featured in news outlets such as the New York Times, the Oprah Winfrey Show, on the Forbes 30 under 30, and on Inc Magazine’s 2021 Female Founders list. Outside of work Jasmine is a poet, mentor, STEM advocate, and Advisory Board Member for the Network for Teaching Entrepreneurship.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
