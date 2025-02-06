import { useState } from "react";

function HeaderLink({
  name,
  href,
  underlineColor,
  onClick,
}: {
  name: string;
  href: string;
  underlineColor: string;
  onClick: () => void;
}) {
  return (
    <a href={href}>
      <span
        className={`cursor-pointer hover:underline ${underlineColor} decoration-8 underline-offset-8`}
        onClick={onClick}
      >
        {name}
      </span>
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full py-6 backdrop-blur z-50">
      <div className="flex flex-row justify-between text-xl mr-12 ml-8">
        <div className="cursor-pointer w-1/6">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <button
          className="lg:hidden text-white text-3xl md:text-5xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div
          className={`flex absolute right-6 md:right-8 lg:right-0 top-20 md:top-24 space-y-2 lg:space-y-0 lg:top-0 lg:relative lg:space-x-16 text-lg flex-col justify-center lg:flex-row items-center lg:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <HeaderLink
            name="About"
            href="#about"
            underlineColor="decoration-blue"
            onClick={toggleMenu}
          />
          <HeaderLink
            name="Schedule"
            href="#schedule"
            underlineColor="decoration-pink"
            onClick={toggleMenu}
          />
          <HeaderLink
            name="Speakers"
            href="#speakers"
            underlineColor="decoration-blue"
            onClick={toggleMenu}
          />
          <HeaderLink
            name="Prizes"
            href="#prizes"
            underlineColor="decoration-white"
            onClick={toggleMenu}
          />
          <HeaderLink
            name="Sponsors"
            href="#sponsors"
            underlineColor="decoration-blue"
            onClick={toggleMenu}
          />
          <HeaderLink
            name="FAQs"
            href="#faqs"
            underlineColor="decoration-pink"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}
