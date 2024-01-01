import React from 'react';

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
      className="py-16 text-white m-auto font-bold text-center w-2/3"
      id="sponsors"
    >
      <h1 className="text-6xl mb-24">Sponsors</h1>
      <p className="text-4xl font-title">...Coming Soon...</p>
    </section>
  );
}
