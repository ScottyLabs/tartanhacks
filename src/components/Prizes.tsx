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
    description: 'Most significant product/business model introducing change that leads to significant societal impact.',
  },
  {
    title: 'Deepest Diver',
    description: 'Most significant innovation that makes use of emerging, groundbreaking technology.',
  },
  {
    title: 'Against the Current',
    description: 'Most significant innovation that does not use AI.',
  },
  {
    title: 'School of Fish',
    description: 'Most significant innovation in Edtech.',
  },
  {
    title: 'Save the Turtles',
    description: 'Most significant innovation in sustainability.',
  },
];

const appLovinPrizes = [
  {
    title: 'Best Content Creation Hack - First Place',
    description: 'Simplifying Content Creation: Creating content, especially advertising and marketing content, is time consuming and resource intensive. Build a tool to help users create or generate content faster! Personalized Content: Creating content for large audiences can sometimes feel impersonal to viewers. Explore ways to dynamically personalize content to make it more engaging and relevant to each individual. Interactive Content: Text, audio, and video are traditional content formats that require no interaction. Reimagine current media by making them engaging and responsive to user input.',
  },
  {
    title: 'Best Content Creation Hack - Second Place',
    description: 'Second place prize for outstanding content creation solutions (See description for first place).',
  },
  {
    title: 'Best Content Creation Hack - Third Place',
    description: 'Third place prize for creative content creation projects (see description for first place).',
  },
];

const externalPrizes = [
  {
    title: 'Story Prize*',
    description: 'The top projects that creatively integrate Story to push the boundaries of decentralized intellectual property (IP). Whether through AI agents, content licensing, new monetization models, or novel ownership mechanisms, submissions should demonstrate how Story’s infrastructure can enable meaningful IP transactions on-chain.',
  },
  {
    title: 'XRP Ledger Challenge*',
    description: 'Awarded by Ripple to the most fundamentally new application of the XRPL, delivering an innovative, scalable, and cost-effective fintech solution',
  },
  {
    title: 'Best Use of AI by powered Reach Capital*',
    description: 'Reach Capital invests in the next generation of founders and technical talent, and they want you to use AI to transform the future of learning, health, and work. Build a project that impacts one (or all!) of these areas.',
  },
  {
    title: 'Best Use of Gen AI*',
    description: 'Think outside the box and integrate cutting-edge AI models to create innovative solutions with real-world impact. Utilize publicly available Generative AI APIs (like those from OpenAI, Anthropic, Hugging Face, Llama, IBM Watson, or Google Gemini) to develop a unique and functional application.',
  },
  {
    title: 'Best Domain Name from GoDaddy Registry*',
    description: 'GoDaddy Registry is giving you everything you need to be the best hacker no matter where you are. Register your domain name with GoDaddy Registry for a chance to win some amazing prizes!',
  },
  {
    title: 'Best AI Application Built with Cloudflare*',
    description: 'With Cloudflare, you’ll have all the building blocks to create a full-stack application; from C3 (create Cloudflare command line) instance deployment to object storage. You can even run GenAI (LLMs, text to image, Voice to text etc..) in the cloud and leverage your AI functionality via API requests using Cloudlfare’s Workers AI! Enjoy Cloudflare’s generous free tier to get started at no cost! This weekend, we want you to build an AI Application utilizing Cloudflare’s numerous services.',
  },
  {
    title: 'Quantum Track*',
    description: 'Infuse a quantum-inspired element into their projects! Whether you’re adding a quantum touch to your favorite app or preparing your system for the era of quantum hardware, we want you to push beyond the constraints of classical computing models and explore new possibilities.',
  },
  {
    title: 'Best Use of Computer Vision',
    description: 'Give computers the gift of sight and the power to act! The computer vision prize track challenges you to develop intelligent systems that can transform sight into action. Think beyond simple recognition – create applications that use computer vision to drive real-world responses, whether it\'s a PID-based gimbal controller tracking detected objects, an autonomous navigation system, or another exciting project that bridges perception and action. Projects will be judged on a combination of novelty, usability, and technical implementation. While leveraging existing libraries and code is encouraged, we\'re particularly interested in creative applications of computer vision. Work hard, go fast, and don’t be afraid to fail; there’s beauty in the struggle.',
  }
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
        <div className="mb-8 text-center font-basteleur text-4xl text-white">AppLovin*</div>
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

      {/* Disclaimer for attending required talks */}
      <div className="mt-24 w-full max-w-4xl px-8">
        <div className="-mb-4 text-center font-basteleur text-lg text-white">*Prize requires attendance at specific sponsor talk to be eligible (see hacker guide)</div>
      </div>
    </section>
  );
}
