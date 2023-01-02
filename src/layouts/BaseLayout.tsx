import Head from 'next/head';
import type { ReactNode } from 'react';
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
        <title>TartanHacks 2023 | Feb 3-4, 2023</title>
        <meta name="title" content="TartanHacks 2023 | Feb 3-4, 2023" />
        <meta
          name="description"
          content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tartanhacks.com/" />
        <meta property="og:title" content="TartanHacks 2023 | Feb 3-4, 2023" />
        <meta
          property="og:description"
          content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
        />
        <meta property="og:image" content="/cover-photo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tartanhacks.com/" />
        <meta
          property="twitter:title"
          content="TartanHacks 2023 | Feb 3-4, 2023"
        />
        <meta
          property="twitter:description"
          content="TartanHacks is Carnegie Mellon's largest hackathon! It is a 24-hour hackathon where participants from all over the country create innovative projects."
        />
        <meta property="twitter:image" content="/cover-photo.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Header />
        <main className="scroll-smooth">{children}</main>
      </div>
    </>
  );
}
