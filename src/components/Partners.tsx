/* eslint-disable */
import React from 'react';

import PartnersTitle from '../svg/PartnersTitle';

type PartnerProps = {
	name: string;
	logo: string;
	link: string;
};

function Partner(props: PartnerProps) {
	return (
		<div className="w-full">
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

const partners: (PartnerProps & { key: string })[] = [
	{
		name: 'Project Olympus',
		logo: '/partners/project_olympus.png',
		key: 'project_olympus',
		link: 'https://www.cmu.edu/swartz-center-for-entrepreneurship/education-and-resources/project-olympus/',
	},
	{
		name: 'GSA',
		logo: '/partners/gsa.png',
		key: 'gsa',
		link: 'https://www.cmu.edu/stugov/gsa/about-the-gsa/index.html',
	},
	{
		name: 'RoboClub',
		logo: '/partners/roboclub.png',
		key: 'roboclub',
		link: 'https://roboticsclub.org/',
	},
];

export default function Partners() {
	return (
		<section
			className="pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto flex flex-col gap-24"
			id="partners"
		>
			<div className="w-full mx-auto">
				<PartnersTitle />
			</div>
			<div className="grid grid-cols-1 gap-8">
				{partners.map((props) => (
					<Partner {...props} key={props.key} />
				))}
			</div>
		</section>
	);
}
/* eslint-enable */
