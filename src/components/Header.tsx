import clsx from "clsx";

function HeaderLink({
  name,
  href,
  underlineColor,
  onClick,
}: {
  name: string;
  href: string;
  underlineColor: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      className={clsx(
        "text-white hover:underline decoration-2 underline-offset-4",
        underlineColor
      )}
      onClick={onClick}
    >
      {name}
    </a>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 w-full py-6 backdrop-blur z-50">
      <div className="flex flex-row justify-between text-xl mr-12 ml-8">
        <div className="cursor-pointer w-1/6">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-16 items-center">
          <HeaderLink
            name="About"
            href="#about"
            underlineColor="decoration-blue"
          />
          <HeaderLink
            name="Schedule"
            href="#schedule"
            underlineColor="decoration-pink"
          />
          <HeaderLink
            name="Speakers"
            href="#speakers"
            underlineColor="decoration-blue"
          />
          <HeaderLink
            name="Prizes"
            href="#prizes"
            underlineColor="decoration-white"
          />
          <HeaderLink
            name="Sponsors"
            href="#sponsors"
            underlineColor="decoration-blue"
          />
          <HeaderLink
            name="FAQs"
            href="#faqs"
            underlineColor="decoration-pink"
          />
        </div>
      </div>
    </header>
  );
}
