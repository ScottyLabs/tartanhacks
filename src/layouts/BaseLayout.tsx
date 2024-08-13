/* eslint-disable */
import Head from 'next/head';
import type { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Props {
	children?: ReactNode;
	className?: string;
}

/**
 * The base layout which includes the ScottyLabs header,
 * a navbar, and a footer
 */
export default function BaseLayout({ children, className }: Props) {
	return (
		<>
			<Head>
				<title>TartanHacks 2025 | Feb 7-8, 2025</title>
				<meta name="title" content="TartanHacks 2025 | Feb 7-8, 2025" />
				<meta
					name="description"
					content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tartanhacks.com/" />
				<meta
					property="og:title"
					content="TartanHacks 2025 | Feb 7-8, 2025"
				/>
				<meta
					property="og:description"
					content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
				/>
				<meta
					property="og:image"
					content="https://tartanhacks.com/cover-photo-2024.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://tartanhacks.com/"
				/>
				<meta
					property="twitter:title"
					content="TartanHacks 2025 | Feb 7-8, 2025"
				/>
				<meta
					property="twitter:description"
					content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
				/>
				<meta
					property="twitter:image"
					content="https://tartanhacks.com/cover-photo-2024.png"
				/>
				<link rel="icon" href="favicon.png" />
			</Head>
			<div>
				<Header />
				<main className="scroll-smooth">{children}</main>
				<Footer />
			</div>
		</>
	);
}
/* eslint-enable */
