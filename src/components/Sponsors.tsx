import React from 'react';

import SponsorsTitle from '../svg/SponsorsTitle';
import Image from 'next/image';

export function Sponsor({ src }: { src: string }) {
  return (
    <img
      src={src}
      className="flex-0 h-24 p-2 object-contain bg-white rounded-lg"
    />
  );
}

export function SponsorTier({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row">
      <div className="text-xl font-bold text-yellow md:mr-8 w-24 mb-2 md:mb-0 text-center md:text-right">
        {name}
      </div>
      <div className="flex flex-1 justify-center items-center md:gap-x-8 md:gap-y-0 gap-y-2 flex-col md:flex-row">
        {children}
      </div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section
      className="pb-16 pt-48 -mb-36 border-b-4 w-2/3 m-auto flex flex-col gap-24"
      id="sponsors"
    >
      <div className="w-full mx-auto">
        <SponsorsTitle />
      </div>
      <div className="w-full relative h-32">
        <Image
          src="/sponsors/pls.png"
          objectFit="contain"
          layout="fill"
          alt="pls"
        />
      </div>
    </section>
  );
}
