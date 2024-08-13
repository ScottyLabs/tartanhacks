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
	const key = idx % 4;
	let stroke: React.ReactNode;
	// eslint-disable-next-line default-case
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
	// eslint-disable-next-line @typescript-eslint/no-shadow
	const FAQs = [
		{
			q: `Who runs TartanHacks?`,
			a: `TartanHacks is run by ScottyLabs, the premiere software development club (and hackathon organizing team) at Carnegie Mellon University. ScottyLabs is not affiliated with any academic department; all of our funding for events like TartanHacks comes from corporate sponsors!
			While our organization is only open to CMU students, please reach out to us at hello@scottylabs.org if you have any questions about the work that we do.`,
		},
		{
			q: `Will TartanHacks be in-person this year?`,
			a: `TartanHacks will be fully in-person, with no remote option offered. Our primary hacking space will be on the second floor of the Cohon University Center at CMU.`,
		},
		{
			q: `How much does it cost to participate in TartanHacks?`,
			a: `Participating in TartanHacks is completely free for all undergraduate students! However, we are unable to provide travel reimbursements for non-CMU hackers.`,
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
			a: 'Unfortunately, we are unable to provide housing for participants. If you are a non-CMU student, you should arrange your own housing for the night of Friday, February 7th, 2025. Students who stay up through the entire night will be allowed to continue hacking in the Cohon University Center. However, we do encourage participants to sleep (at least a little).',
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
			a: `Teams can have between 1 and 4 people (inclusive).`,
		},
		{
			q: 'Does everyone who registers get to participate at TartanHacks?',
			a: `All CMU students are guaranteed admission. We expect that all registered from outside of CMU will be accepted, but we occasionally have more sign up than we can admit. 
				Hackers are accepted on a rolling basis if they submit an application before the deadline of 1/24 for non-CMU students, and the deadline of 1/31 for CMU students.
				You will be notified via email about your registration status.`,
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
		<section
			className="pb-16 pt-48 w-2/3 m-auto flex flex-col gap-24 text-white"
			id="faq"
		>
			<h1 className="text-6xl text-center font-title">FAQs</h1>
			<div id="faq">
				<div className="max-w-4xl m-auto">
					<FAQList />
				</div>
			</div>
		</section>
	);
}
