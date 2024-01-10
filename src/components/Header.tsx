import Link from 'next/link';
import LogoActive from '../../public/svg/logo.svg';
import LogoInactive from '../../public/svg/logo-inactive.svg';
import { useState } from 'react';

function HeaderLink({
  name,
  href,
  underlineColor,
}: {
  name: string;
  href: string;
  underlineColor: string;
}) {
  return (
    <Link href={href} scroll={false}>
      <span
        className={`cursor-pointer hover:underline ${underlineColor} decoration-8 underline-offset-8`}
      >
        {name}
      </span>
    </Link>
  );
}

export default function Header() {
  const [iconHover, setIconHover] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full bg-black text-white pt-6 pb-4 hidden lg:block">
      <div className="flex flex-row justify-between text-xl mr-12 ml-8">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIconHover(true)}
          onMouseLeave={() => setIconHover(false)}
        >
          <Link href="/">{iconHover ? <LogoActive /> : <LogoInactive />}</Link>
        </div>
        <div className="space-x-16 text-lg flex items-center">
          <HeaderLink
            name="About"
            href="#about"
            underlineColor="decoration-yellow"
          />
          <HeaderLink
            name="Theme"
            href="#theme"
            underlineColor="decoration-pink"
          />
          <HeaderLink
            name="Schedule"
            href="#schedule"
            underlineColor="decoration-blue"
          />
          <HeaderLink
            name="Speakers"
            href="#speakers"
            underlineColor="decoration-purple"
          />
          <HeaderLink
            name="Prizes"
            href="#prizes"
            underlineColor="decoration-blue"
          />
          <HeaderLink
            name="Sponsors"
            href="#sponsors"
            underlineColor="decoration-yellow"
          />
          <HeaderLink
            name="FAQs"
            href="#faq"
            underlineColor="decoration-pink"
          />
        </div>
      </div>
    </header>
  );
}
