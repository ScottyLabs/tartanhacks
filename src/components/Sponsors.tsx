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
      <div className="text-xl text-black md:mr-8 w-24 text-center md:text-right">{name}</div>
      <div className="flex flex-1 justify-center md:gap-x-8 md:gap-y-0 gap-y-2 flex-col md:flex-row">{children}</div>
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="py-16 bg-white" id="sponsors">
      <div className="flex">
        <div className="text-beige m-auto">
          <h3 className="text-2xl mb-4 text-center text-purple">Sponsors</h3>
          <div className="space-y-12">
            <SponsorTier name="Silver">
              <Sponsor src="/sponsors/wayfair.png" />
              <Sponsor src="/sponsors/oracle.png" />
            </SponsorTier>
            <SponsorTier name="Bronze">
              <Sponsor src="/sponsors/hrt.png" />
              <Sponsor src="/sponsors/figma.png" />
              <Sponsor src="/sponsors/sandia.png" />
            </SponsorTier>
            <SponsorTier name="Special">
              <Sponsor src="/sponsors/meta.gif" />
            </SponsorTier>
            <SponsorTier name="Kind">
              <Sponsor src="/sponsors/gcp.png" />
              <Sponsor src="/sponsors/replit.png" />
            </SponsorTier>
          </div>
        </div>
      </div>
    </div>
  );
}
