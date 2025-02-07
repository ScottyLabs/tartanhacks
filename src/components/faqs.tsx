import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

function FAQDisclosure({ question, answer }: { question: string; answer: string }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="text-md z-30 flex w-full justify-between border-t-2 px-4 pb-4 pt-3 text-left text-lg font-bold">
            <span>{question}</span>
            <ChevronUpIcon className={clsx(open ? 'rotate-180 transform' : '', 'text-purple-500 h-5 w-5')} />
          </DisclosureButton>
          <DisclosurePanel className="flex max-w-3xl flex-row items-center px-4 pb-4 text-left text-white">
            <p className="mr-8 text-sm">{answer}</p>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

function FAQList() {
  const FAQs = [
    {
      q: `Who runs TartanHacks?`,
      a: `TartanHacks is run by ScottyLabs, the premiere software development club (and hackathon organizing team) at Carnegie Mellon University. ScottyLabs is not affiliated with any academic department; all of our funding for events like TartanHacks comes from corporate sponsors!
      While our organization is only open to CMU students, please reach out to us at hello@scottylabs.org if you have any questions about the work that we do.`,
    },
    {
      q: `How much does it cost to participate in TartanHacks?`,
      a: `Participating in TartanHacks is completely free for all undergraduate students!`,
    },
    {
      q: `Will TartanHacks provide travel reimbursements?`,
      a: `We are offering travel reimbursements to a select number of students this year. To apply for a travel reimbursement, submit your application and indicate you would like to apply for a reimbursement by Friday, January 3rd at the latest. Participants granted reimbursements will be notified the following week, and will have 7 days to submit their travel itinerary and receipts to the TartanHacks team by Friday, January 10th.`,
    },
    {
      q: `I'm not a CS major, can I still join?`,
      a: `Yes! All undergraduate majors and programs, even if they aren't technical, are welcome at TartanHacks. We will provide access to hacker guides, and we have slides from a series of web development workshops online that you can use to brush up your skills!
        We will also offer workshops during the event so you can get started with new frameworks.`,
    },
    {
      q: 'Is TartanHacks open to first-year students?',
      a: `Yes! We welcome students of all skill levels to participate. First-year students and first-time hackers have always been part of TartanHacks; we would love to see you at the event! We also award specific prizes for beginner hackers.`,
    },
    {
      q: `Who is allowed to participate in TartanHacks?`,
      a: `All undergraduate AND graduate students from accredited colleges and universities are welcome to participate!`,
    },
    {
      q: 'Is housing provided for participants?',
      a: 'Unfortunately, we are unable to provide housing for participants. Students who stay up through the entire night will be allowed to continue hacking in the Cohon University Center. However, we do encourage participants to sleep as needed. Due to fire safety concerns, participants may not sleep in hallways or on the floor of the Cohon University Center. All non-CMU student, should otherwise arrange their own housing for the night of Friday, February 7th, 2025.',
    },
    {
      q: 'Can I register with a team?',
      a: 'All participants will be required to register for TartanHacks as individuals, but there will be an opportunity to specify your team members before the event starts. If you already have a team chosen, you will be able to work with them.',
    },
    {
      q: `If I don't have a team before the event, can I still participate?`,
      a: `Absolutely! We'll have a team mixer after the opening ceremony to help you meet new hackers.`,
    },
    {
      q: 'How many people can we have per team?',
      a: `Teams may have no more than 4 participants. Teammates are not strictly necessary, as students are allowed to participate as individuals.`,
    },
    {
      q: 'Does everyone who register get to participate at TartanHacks?',
      a: `All CMU students are guaranteed admission. We expect that all registered from outside of CMU will be accepted, but we occasionally have more sign up than we can accommodate.
        External registration closes on Friday, January 24th. Students from outside CMU will be notified via email about their admission status by Wednesday, January 29th.`,
    },
    {
      q: 'Are we limited to software projects or are hardware projects allowed?',
      a: `Hardware projects are absolutely allowed! However, be conscious of the amount of space that you need for the Judging Expo, as we can only guarantee so much room on each table for one team.`,
    },
    {
      q: 'What resources will be provided to participants?',
      a: `A thorough participant guide (Google Doc and PDF) will be made available on the TartanHacks website at least one week before the event.`,
    },
    {
      q: 'Will there be food?',
      a: `Yes!! There will be several meals provided, at no cost to participants including a Friday dinner, Midnight sweet treat, and breakfast, lunch, and dinner on Saturday. We will offer vegan, vegetarian, gluten-free, halal and kosher options for those with dietary restrictions.
      Refreshments such as bottled water, coffee, and energy drinks will also be offered in limited quantity.`,
    },
    {
      q: 'My Android device is not compatible with the dashboard app. What should I do?',
      a: `You can either use the web version of the dashboard, or try the APK available here: https://drive.google.com/file/d/1l2GzUEyRYgiNyHPfeWrm2MwIxd_sLa5c/view?usp=sharing`,
    }
  ];

  return (
    <div className="w-full">
      {FAQs.map(({ q, a }, idx) => (
        <FAQDisclosure key={idx} question={q} answer={a} />
      ))}
    </div>
  );
}

export function Faqs() {
  return (
    <section className="flex flex-col items-center justify-center pb-24" id="faqs">
      <hr className="my-8 h-px w-3/4 border-0 bg-white md:w-2/3" />
      <h1 className="z-30 mt-24 px-10 font-basteleur text-5xl uppercase md:text-8xl">FAQS</h1>
      <div className="z-30 w-3/4 pt-10 text-center font-sfpro text-xl text-white md:w-2/3">
        <FAQList />
      </div>
    </section>
  );
}
