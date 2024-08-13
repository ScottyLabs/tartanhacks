/* eslint-disable */
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import PrizesTitle from '../svg/Prizes';

function Prize({
	name,
	description,
	prize,
	link,
	className,
}: {
	name: string;
	description: string;
	prize: string;
	link?: string;
	className?: string;
}) {
	return (
		<div
			className={`border-4 border-white p-4 rounded-lg flex flex-col justify-between h-fit min-h-[8rem] lg:min-h-0 ${className}`}
		>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex w-full justify-between px-4 pt-3 pb-4 text-center text-md text-lg font-bold my-auto">
							<h3 className="text-lg text-white font-bold w-full">
								{name}
							</h3>
							<ChevronUpIcon
								className={`${
									open ? 'rotate-180 transform' : ''
								} h-5 w-5 text-purple-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pb-2 text-white max-w-3xl flex flex-col gap-8 items-center">
							<p>{description}</p>
							{link && (
								<div className="underline text-yellow">
									<Link href={link}>
										For details about the prize, click here
									</Link>
								</div>
							)}
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
			className="flex flex-col pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto gap-1` text-white"
			id="prizes"
		>
			<PrizesTitle className="m-auto w-full" />
			<h1 className="mt-16 text-center text-white text-3xl md:text-3xl font-bold gap-1">
				To be announced soon!
			</h1>
			<h1 className="font-thin mt-6">
				Our prizes take a wide range, and in previous years have included: "Scott Krulcik Grand
				Prize" (Most Impressive Hack), "Spiciest Meme", "Best Use of AI", and other external prizes provided by our sponsors!
			</h1>
		</section>
	);
}
/* eslint-enable */
