import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

function GrandPrize({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[url('/prize.svg')] bg-contain bg-center bg-no-repeat p-6 text-center">
      <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
      <p className="font-basteleur text-3xl lg:text-4xl">{description}</p>
    </div>
  );
}

function PrizeDisclosure({ title, description }: { title: string; description: string }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="contents">
          <div
            className={clsx(
              open ? 'rounded-t-lg' : 'rounded-lg',
              'col-span-1 bg-white/5 transition-all hover:bg-white/10'
            )}>
            <DisclosureButton className="flex w-full items-center justify-between p-4 text-left text-xl">
              <span>{title}</span>
              <ChevronUpIcon className={clsx(open && 'rotate-180 transform', 'h-6 w-6')} />
            </DisclosureButton>
          </div>
          <div className="contents">
            <DisclosurePanel className="col-span-1 rounded-b-lg bg-white/5 p-4">
              {description}
            </DisclosurePanel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

const themedPrizes = [
  {
    title: 'Making Waves',
    description: 'Most innovative and impactful project overall.',
  },
  {
    title: 'Deepest Diver',
    description: 'Best technical achievement or deep-dive into complex technology.',
  },
  {
    title: 'Against the Current',
    description: 'Most creative or unique approach to solving a problem.',
  },
  {
    title: 'School of Fish',
    description: 'Best collaboration and teamwork demonstrated in a project.',
  },
  {
    title: 'Save the Turtles',
    description: 'Best sustainability or environmental impact focused project.',
  },
];

const appLovinPrizes = [
  {
    title: 'Best Content Creation Hack - First Place',
    description: 'First place prize for the most innovative content creation tool or platform.',
  },
  {
    title: 'Best Content Creation Hack - Second Place',
    description: 'Second place prize for outstanding content creation solutions.',
  },
  {
    title: 'Best Content Creation Hack - Third Place',
    description: 'Third place prize for creative content creation projects.',
  },
];

const externalPrizes = [
  {
    title: 'Club Sponsored Prize',
    description: 'Details to be announced',
  },
  {
    title: 'Corporate Sponsored Prize',
    description: 'Details to be announced',
  },
];

export function Prizes() {
  return (
    <section className="flex flex-col items-center justify-center pb-24" id="prizes">
      <hr className="my-8 h-px w-3/4 border-0 bg-white md:w-2/3" />
      <h1 className="z-30 mt-24 px-10 font-basteleur text-6xl uppercase md:text-8xl">Prizes</h1>

      <div className="mt-16 w-full px-4">
        <div className="mb-8 text-center font-basteleur text-4xl text-white">ScottyLabs</div>
        <div className="max-w-8xl mx-auto grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-3 lg:gap-0">
          <GrandPrize title="Scott Krulcik Grand Prize" description="$5,000" />
          <GrandPrize title="2nd Place Overall" description="$2,000" />
          <GrandPrize title="3rd Place Overall" description="$1,000" />
        </div>
      </div>

      {/* Themed Prizes */}
      <div className="mt-12 w-full max-w-4xl px-4">
        <div className="mb-8 text-center font-basteleur text-4xl text-white">Themed</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {themedPrizes.map((prize) => (
            <div className="z-30 col-span-1">
              <PrizeDisclosure key={prize.title} title={prize.title} description={prize.description} />
            </div>
          ))}
        </div>
      </div>

      {/* AppLovin Prizes */}
      <div className="mt-12 w-full max-w-4xl px-4">
        <div className="mb-8 text-center font-basteleur text-4xl text-white">AppLovin</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {appLovinPrizes.map((prize) => (
            <div className="z-30 col-span-1">
              <PrizeDisclosure key={prize.title} title={prize.title} description={prize.description} />
            </div>
          ))}
        </div>
      </div>

      {/* External Prizes */}
      <div className="mt-12 w-full max-w-4xl px-4">
        <div className="mb-8 text-center font-basteleur text-4xl text-white">External</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {externalPrizes.map((prize) => (
            <div className="z-30 col-span-1">
              <PrizeDisclosure key={prize.title} title={prize.title} description={prize.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
