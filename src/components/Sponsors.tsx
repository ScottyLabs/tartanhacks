/* eslint-disable */
import React from 'react';
import clsx from 'clsx';
import SponsorsTitle from '../svg/SponsorsTitle';

export function SponsorTier({
	name,
	children,
}: {
	name: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-between items-center flex-col md:flex-row gap-4">
			<div className="text-3xl font-bold md:mr-8 w-24 text-white tracking-wider mb-2 md:mb-0 text-center md:text-right">
				{name}
			</div>
			<div className="w-full flex flex-1 justify-center items-center md:gap-x-8 md:gap-y-0 gap-y-2 flex-col md:flex-row">
				{children}
			</div>
		</div>
	);
}

type SponsorTier = 'platinum' | 'diamond' | 'gold' | 'silver' | 'bronze';
type SponsorProps = {
	name: string;
	tier: SponsorTier;
	logo: string;
	link: string;
	cols: 3 | 4 | 6 | 12;
};

export function Sponsor(props: SponsorProps) {
	return (
		<div
			className={clsx(
				'w-full',
				props.cols === 3
					? 'col-span-3'
					: props.cols === 4
						? 'col-span-4'
						: props.cols === 6
							? 'col-span-6'
							: props.cols === 12
								? 'col-span-12'
								: undefined,
			)}
		>
			<a href={props.link} target="_blank" rel="noreferrer">
				<div className="w-full flex justify-center border-2 rounded-md h-40 p-8 relative">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={props.logo}
						className="object-contain"
						alt={props.name}
					/>
				</div>
			</a>
		</div>
	);
}

const sponsors: (SponsorProps & { key: string })[] = [
	{
		name: 'PLS',
		tier: 'platinum',
		logo: '/sponsors/pls.png',
		key: 'pls',
		link: 'https://www.plslogistics.com/',
		cols: 12,
	},
	{
		name: 'Ripple',
		tier: 'gold',
		logo: '/sponsors/ripple.png',
		key: 'ripple',
		link: 'https://ripple.com',
		cols: 12,
	},
	{
		name: 'Balsamiq',
		tier: 'bronze',
		logo: '/sponsors/balsamiq.png',
		key: 'balsamiq',
		link: 'https://balsamiq.com',
		cols: 12,
	},
	{
		name: 'Codédex',
		tier: 'bronze',
		logo: '/sponsors/codedex.png',
		key: 'codédex',
		link: 'https://codedex.io',
		cols: 12,
	},
	{
		name: 'Wolfram',
		tier: 'bronze',
		logo: '/sponsors/wolfram_white.png',
		key: 'wolfram',
		link: 'https://wolfram.com',
		cols: 12,
	},
];

export default function Sponsors() {
	return (
		<section
			className="pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto flex flex-col gap-10"
			id="sponsors"
		>
			<div className="w-full mx-auto">
				<SponsorsTitle />
			</div>
			<h1 className="mt-16 text-center text-white text-3xl md:text-3xl font-bold gap-1">
				Coming soon!
			</h1>
		</section>
	);
}

/* eslint-enable */
