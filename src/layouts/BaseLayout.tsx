import Head from "next/head";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  collapsedNavBar?: boolean;
}

/**
 * The base layout which includes the ScottyLabs header,
 * a navbar, and a footer
 */
export default function BaseLayout({
  children,
  collapsedNavBar = true,
}: Props) {
  return (
    <>
      <Head>
        <title>TartanHacks</title>
        <meta name="title" content="TartanHacks" />
        <meta
          name="description"
          content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tartanhacks.org/" />
        <meta property="og:title" content="TartanHacks" />
        <meta
          property="og:description"
          content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
        />
        <meta property="og:image" content="/cover-photo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tartanhacks.org/" />
        <meta property="twitter:title" content="TartanHacks" />
        <meta
          property="twitter:description"
          content="ScottyLabs a community of passionate, interdisciplinary leaders that use design and technology to achieve more."
        />
        <meta property="twitter:image" content="/cover-photo.png" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
