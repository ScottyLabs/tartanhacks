import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import StrokeYellow from '../../public/svg/stroke-yellow.svg';
import StrokePink from '../../public/svg/stroke-pink.svg';
import StrokePurple from '../../public/svg/stroke-purple.svg';
import StrokeBlue from '../../public/svg/stroke-blue.svg';

function FAQDisclosure({
  question,
  answer,
  idx,
}: {
  question: string;
  answer: string;
  idx: number;
}) {
  let key = idx % 4;
  let stroke: React.ReactNode;
  switch (key) {
    case 0:
      stroke = <StrokeYellow />;
      break;
    case 1:
      stroke = <StrokePink />;
      break;
    case 2:
      stroke = <StrokePurple />;
      break;
    case 3:
      stroke = <StrokeBlue />;
      break;
  }
  const hoverColor = idx % 2 ? 'hover:text-pink' : 'hover:text-yellow';
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`flex w-full justify-between px-4 pt-3 pb-4 text-left text-md ${hoverColor} text-lg font-bold border-t-2`}
          >
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 text-white max-w-3xl flex flex-row items-center">
            <p className="mr-8 max-w-xl">{answer}</p>
            <div className="hidden md:block">{stroke}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function FAQList() {
  const FAQs = [
    {
      q: `Will TartanHacks be in-person this year?`,
      a: `Yes, TartanHacks will be fully in-person.`,
    },
    {
      q: `How much does it cost to participate in TartanHacks?`,
      a: `Nothing. TartanHacks is free for all undergraduate students! However, we will not be providing travel reimbursements for non-CMU hackers.`,
    },
    {
      q: `Will travel costs be reimbursed?`,
      a: `No, unfortunately we are unable to provide travel reimbursements due to budgetary constraints. Non-CMU students are always welcome though!`,
    },
    {
      q: `I'm not a CS major, can I still join?`,
      a: `Yes! All undergraduate majors and programs, even if they aren't technical, are welcome at TartanHacks. We have slides from a series of web development workshops online that you can use to brush up your skills! We'll also have some workshops during the event so you can get started with new frameworks.`,
    },
    {
      q: 'Is TartanHacks open to first-year students?',
      a: `Yes! We welcome students of all skill levels to participate. First-year students and first-time hackers have always been part of TartanHacks; we would love to see you at the event! Some prizes will also be specific for beginner hackers.`,
    },
    {
      q: `I'm a graduate student. Can I still participate?`,
      a: `Yes! Graduate students are welcome to particpate this year.`,
    },
    {
      q: 'Are non-CMU students allowed to attend?',
      a: 'Absolutely! Just sign up :)',
    },
    {
      q: 'Is housing provided for participants?',
      a: 'Unfortunately, we are unable to provide housing for participants. If you are a non-CMU student, you should arrange your own housing.'
    },
    {
      q: 'Can I register with a team?',
      a: `You have to sign up as an individual for the event, and we'll have you specify your team later on. Don't worry, if you already have a team chosen you'll still be able to work with them during event.`,
    },
    {
      q: `If I don't have a team before the event, can I still participate?`,
      a: `Absolutely! We'll have a team mixer after the opening ceremony to help you meet new hackers.`,
    },
    {
      q: 'How many people can we have per team?',
      a: `Up to 4 people are allowed.`,
    },
    {
      q: 'Does everyone who registers get to participate at TartanHacks?',
      a: `We expect that everyone who registers can get in. However, sometimes more hackers sign up than we can admit. Hackers are accepted on a rolling basis until the CMU and Pittsburgh deadline of January 26 and national deadline of January 19. You will be notified via email about your registration status.`,
    },
    {
      q: 'Are we limited to software projects or are hardware projects allowed?',
      a: `Hardware projects are absolutely allowed!`,
    },
    {
      q: 'Who runs TartanHacks?',
      a: `TartanHacks is run by ScottyLabs, a student organization at Carnegie Mellon University that develops apps for CMU and runs educational events, like TartanHacks. ScottyLabs isn't affiliated with any academic department, and all of our funding comes from corporate sponsors.`,
    },
  ];

  return (
    <div className="w-full">
      {FAQs.map(({ q, a }, idx) => (
        <FAQDisclosure key={idx} question={q} answer={a} idx={idx} />
      ))}
    </div>
  );
}

export default function FAQs() {
  return (
    <section className="pb-16 pt-48 w-2/3 m-auto flex flex-col gap-24 text-white" id='faq'>
    <h1 className='text-6xl text-center font-title'>FAQs</h1>
      <div id="faq">
        <div className="max-w-4xl m-auto">
          <FAQList />
        </div>
      </div>
    </section>
  );
}
