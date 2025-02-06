import clsx from 'clsx';

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
      className={clsx('text-white decoration-2 underline-offset-4 hover:underline', underlineColor)}
      onClick={onClick}>
      {name}
    </a>
  );
}

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full py-6 backdrop-blur">
      <div className="ml-8 mr-12 flex flex-row justify-between text-xl">
        <div className="w-1/6 cursor-pointer">
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden items-center space-x-16 lg:flex">
          <HeaderLink name="About" href="#about" underlineColor="decoration-blue" />
          <HeaderLink name="Schedule" href="#schedule" underlineColor="decoration-pink" />
          <HeaderLink name="Speakers" href="#speakers" underlineColor="decoration-blue" />
          <HeaderLink name="Prizes" href="#prizes" underlineColor="decoration-white" />
          <HeaderLink name="Sponsors" href="#sponsors" underlineColor="decoration-blue" />
          <HeaderLink name="FAQs" href="#faqs" underlineColor="decoration-pink" />
        </div>
      </div>
    </header>
  );
}
