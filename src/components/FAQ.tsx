import {Disclosure, Transition} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/20/solid';

function FAQDisclosure(
  {
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
  return (
    <Disclosure>
      {({open}) => (
        <>
          <Disclosure.Button
            className="flex w-full justify-between rounded-lg px-4 pt-3 pb-1 text-left text-md hover:text-yellow">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-400 max-w-3xl">
            {answer}
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
      a: `Yes, TartanHacks will be fully in-person.`
    },
    {
      q: `How much does it cost to participate in TartanHacks?`,
      a: `Nothing. TartanHacks is free for all undergraduate students!`
    },
    {
      q: `I'm not a CS major, can I still join?`,
      a: `Yes! All undergraduate majors and programs, even if they aren't technical, are welcome at TartanHacks. We have slides from a series of web development workshops online that you can use to brush up your skills! We'll also have some workshops during the event so you can get started with new frameworks.`
    },
    {
      q: 'Is TartanHacks open to first-year students?',
      a: `Yes! We welcome students of all skill levels to participate. First-year students and first-time hackers have always been part of TartanHacks; we would love to see you at the event! Some prizes will also be specific for beginner hackers.`
    },
    {
      q: `I'm a graduate student. Can I still participate?`,
      a: `Unfortunately, graduate students cannot participate. TartanHacks is currently limited to undergraduate students only.`
    },
    {
      q: 'Are non-CMU students allowed to attend?',
      a: 'Absolutely! Just sign up :)'
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
      a: `We expect that everyone who registers can get in. However, sometimes more hackers sign up than we can admit. Once registration closes, hackers are accepted on a rolling basis. You will be notified via email about your registration status.`
    },
    {
      q: `I got in, but a few of my team members were put on the waitlist. Will they be able to participate?`,
      a: `Hackers are accepted individually, so we are unable to guarantee that all members of your team will get in. However, if they're on the waitlist, there's still hope! See the next question.`
    },
    {
      q: `Is there a way to get off the waitlist?`,
      a: 'We will be letting hackers off the waitlist on a first-come, first-serve basis on the day of the event. Historically, many people have gotten off the waitlist.',
    },
    {
      q: 'Are we limited to software projects or are hardware projects allowed?',
      a: `We will have a team of student and corporate mentors on hand who are experts in many common technologies. They'll be able to answer your questions, help you debug, and get you set up with new frameworks. They can't make your project for you, but they are always there to help!`
    },
    {
      q: 'Who runs TartanHacks?',
      a: `TartanHacks is run by ScottyLabs, a student organization at Carnegie Mellon University that develops apps for CMU and runs educational events, like TartanHacks. ScottyLabs isn't affiliated with any academic department, and all of our funding comes from corporate sponsors.`
    }
  ]

  return (
    <div className="w-full">
      {FAQs.map(({q, a}) => (<FAQDisclosure key={q} question={q} answer={a}/>))}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="py-16 pb-40" id="faq">
      <div className="text-beige m-auto">
        <h3 className="text-2xl mb-4 text-center text-yellow">FAQs</h3>
        <div className="max-w-4xl m-auto">
          <FAQList/>
        </div>
      </div>
    </div>
  );
}
