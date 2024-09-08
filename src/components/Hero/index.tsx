import clsx from 'clsx';
import { useRouter } from 'next/router';
import Jumbotron from '../../svg/Jumbotron';

import styles from './index.module.scss';

export function RegisterButton({ className }: { className?: string }) {
	const router = useRouter();
	let registerLink = `https://docs.google.com/forms/d/1l_pvU08U1kjfUameWTHmxIB_Yrwe-SsOKuHosKv6XJE/edit`;
	if (
		'utm_source' in router.query &&
		'utm_medium' in router.query &&
		'utm_campaign' in router.query
	) {
		registerLink = `${registerLink}?utm_source=${router.query.utm_source}&utm_medium=${router.query.utm_medium}&utm_campaign=${router.query.utm_campaign}`;
	}

	return (
		<div className={clsx(className, 'text-beige flex justify-center')}>
			<a href={registerLink} target="_blank" rel="noopener noreferrer">
				<div className="border-2 border-black py-3 px-6 text-2xl font-medium bg-pink text-black rounded-xl cursor-pointer hover:bg-black hover:text-pink hover:border-pink">
					Pre-register Now!
				</div>
			</a>
		</div>
	);
}

export default function Hero() {
	return (
		<div className="min-h-screen w-full -mt-36 flex items-center justify-center flex-col">
			<Jumbotron className="w-[80vw] lg:w-[60vw] mx-auto" />
			<div className="text-white text-center">
				<p className="font-bold text-2xl ">
					CMU&apos;s Largest Hackathon
				</p>
				<p className="text-xl ">Feb 7—8, 2025</p>
			</div>
			<RegisterButton
				className={clsx(styles.registerButton, 'mt-10 mb-4')}
			/>
		</div>
	);
}
