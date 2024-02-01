import { Disclosure } from '@headlessui/react';
import PrizesTitle from '../svg/Prizes';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function Prize({
  name,
  description,
  prize,
  className,
}: {
  name: string;
  description: string;
  prize: string;
  className?: string;
}) {
  return (
    <div
      className={`border-4 border-white p-4 rounded-lg flex flex-col justify-between h-fit min-h-[8rem] lg:min-h-0 ${className}`}
    >
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between px-4 pt-3 pb-4 text-center text-md text-lg font-bold my-auto`}
            >
              <h3 className="text-lg text-white font-bold w-full">{name}</h3>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 text-white max-w-3xl flex flex-col gap-8 items-center">
              <p>{description}</p>
              {/**
                <p className="font-bold text-center mb-4">Prize: {prize}</p>
                 * 
                 */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

function PrizeGroup({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h1 className="text-2xl text-white font-bold text-center font-title">
          {title}
        </h1>
      )}
      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-4 w-full">
        {children}
      </div>
    </div>
  );
}

export default function Prizes() {
  return (
    <section
      className="flex flex-col pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto gap-24 text-white"
      id="prizes"
    >
      <PrizesTitle className="m-auto w-full" />
      <PrizeGroup title="ScottyLabs Prizes">
        <Prize
          name="Scott Krulcik Grand Prize"
          description="Most impressive hack at TartanHacks 2024"
          prize="TBD"
        />
        <Prize
          name="First Penguin"
          description={`Inspired by Randy Pausch's The Last Lecture: “Experience is what you get when you don’t get what you wanted. And it can be the most valuable thing you have to offer.”
Awarded to the team that took the biggest gamble while not meeting its goals… a prize for ‘glorious failure’.`}
          prize="TBD"
        />
        <Prize
          name="Raffle"
          description="Join TartanHacks for a chance to win a raffle prize!"
          prize="TBD"
        />
        <Prize
          name="Spiciest Meme"
          description="Spiciest meme in the #memes Discord channel."
          prize="What  you meme? card game"
        />
        <Prize
          name="Best Use of AI"
          description="Best use of AI."
          prize="TBD"
        />
        <Prize
          name="Top 5"
          description="Awarded to the top 5 teams."
          prize="TBD"
        />
      </PrizeGroup>
      <PrizeGroup title="Theme Prizes">
        <Prize
          name="Butterfly Effect"
          description="Most significant product/business model introducing change that leads to significant societal impact"
          prize="TBD"
        />
        <Prize
          name="Blossoming Technology"
          description="Most significant innovation that makes use of emerging, groundbreaking technology"
          prize="TBD"
        />
      </PrizeGroup>
      <PrizeGroup title="External Prizes">
        <Prize name="PLS Logistics Prize" description="Prize from our sponsor PLS for the most comprehensive solution that leverages technology to 
        mitigate risks associated with weather-related disruptions, road construction, and other external factors affecting freight shipping" prize="Apple AirPods Max" />
        <Prize name="Ripple XRP Ledger Prize" description="Prize for XRP Ledger: The On-chain Finance Challenge" prize="TBD" />
        <Prize name="Club Sponsored" description="Additional prizes sponsored by CMU clubs" prize="TBD" />
      </PrizeGroup>
    </section>
  );
}
