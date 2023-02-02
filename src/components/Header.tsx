import Link from 'next/link';
import Logo from '../../public/svg/logo.svg';

function HeaderLink({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} scroll={false}>
      <span className="hover:text-yellow cursor-pointer">{name}</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black text-beige pt-6 pb-4 hidden md:block">
      <div className="flex flex-row justify-between text-xl max-w-7xl m-auto">
        <div>
          <Logo className="leading-4 h-6 mr-4" />
        </div>
        <div className="space-x-8 text-lg flex items-center">
          <HeaderLink name="About" href="#about" />
          <HeaderLink name="Schedule" href="#schedule" />
          <HeaderLink name="Speakers" href="#speakers" />
          <HeaderLink name="Prizes" href="#prizes" />
          <HeaderLink name="FAQ" href="#faq" />
          <HeaderLink name="Sponsors" href="#sponsors" />
        </div>
      </div>
    </header>
  );
}
