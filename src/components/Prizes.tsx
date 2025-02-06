import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

function GrandPrize({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-contain bg-no-repeat bg-center bg-[url('/prize.svg')]">
      <h2 className="font-bold text-2xl lg:text-3xl">{title}</h2>
      <p className="text-3xl lg:text-4xl font-basteleur">{description}</p>
    </div>
  );
}

function PrizeDisclosure({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="contents">
          <div
            className={clsx(
              open ? "rounded-t-lg" : "rounded-lg",
              "bg-white/5 hover:bg-white/10 transition-all col-span-1"
            )}
          >
            <DisclosureButton className="flex w-full items-center justify-between p-4 text-left text-xl">
              <span>{title}</span>
              <ChevronUpIcon
                className={clsx(open && "rotate-180 transform", "h-6 w-6")}
              />
            </DisclosureButton>
          </div>
          <div className="contents">
            <DisclosurePanel className="col-span-1 bg-white/5 rounded-b-lg p-4">
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
    title: "Making Waves",
    description: "Most innovative and impactful project overall.",
  },
  {
    title: "Deepest Diver",
    description:
      "Best technical achievement or deep-dive into complex technology.",
  },
  {
    title: "Against the Current",
    description: "Most creative or unique approach to solving a problem.",
  },
  {
    title: "School of Fish",
    description: "Best collaboration and teamwork demonstrated in a project.",
  },
  {
    title: "Save the Turtles",
    description: "Best sustainability or environmental impact focused project.",
  },
];

const appLovinPrizes = [
  {
    title: "Best Content Creation Hack - First Place",
    description:
      "First place prize for the most innovative content creation tool or platform.",
  },
  {
    title: "Best Content Creation Hack - Second Place",
    description:
      "Second place prize for outstanding content creation solutions.",
  },
  {
    title: "Best Content Creation Hack - Third Place",
    description: "Third place prize for creative content creation projects.",
  },
];

const externalPrizes = [
  {
    title: "Club Sponsored Prize",
    description: "Details to be announced",
  },
  {
    title: "Corporate Sponsored Prize",
    description: "Details to be announced",
  },
];

export function Prizes() {
  return (
    <section
      className="flex flex-col justify-center items-center pb-24"
      id="prizes"
    >
      <hr className="h-px my-8 w-3/4 md:w-2/3 bg-white border-0" />
      <h1 className="mt-24 px-10 uppercase font-basteleur text-6xl md:text-8xl z-30">
        Prizes
      </h1>

      <div className="w-full px-4 mt-16">
        <div className="text-white font-basteleur text-4xl mb-8 text-center">
          ScottyLabs
        </div>
        <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-3 items-center w-full max-w-8xl mx-auto">
          <GrandPrize title="Scott Krulcik Grand Prize" description="$5,000" />
          <GrandPrize title="2nd Place Overall" description="$2,000" />
          <GrandPrize title="3rd Place Overall" description="$1,000" />
        </div>
      </div>

      {/* Themed Prizes */}
      <div className="w-full max-w-4xl px-4 mt-12">
        <div className="text-white font-basteleur text-4xl mb-8 text-center">
          Themed
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {themedPrizes.map((prize) => (
            <div className="col-span-1 z-30">
              <PrizeDisclosure
                key={prize.title}
                title={prize.title}
                description={prize.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* AppLovin Prizes */}
      <div className="w-full max-w-4xl px-4 mt-12">
        <div className="text-white font-basteleur text-4xl mb-8 text-center">
          AppLovin
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appLovinPrizes.map((prize) => (
            <div className="col-span-1 z-30">
              <PrizeDisclosure
                key={prize.title}
                title={prize.title}
                description={prize.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* External Prizes */}
      <div className="w-full max-w-4xl px-4 mt-12">
        <div className="text-white font-basteleur text-4xl mb-8 text-center">
          External
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {externalPrizes.map((prize) => (
            <div className="col-span-1 z-30">
              <PrizeDisclosure
                key={prize.title}
                title={prize.title}
                description={prize.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
