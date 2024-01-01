import Link from 'next/link';
import Logo from '../../public/svg/logo.svg';

function HeaderLink({ name, href, underlineColor }: { name: string; href: string, underlineColor: string }) {
  return (
    <Link href={href} scroll={false}>
      <span className={`cursor-pointer hover:underline ${underlineColor} decoration-8 underline-offset-8`}>{name}</span>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-black text-white pt-6 pb-4 hidden md:block">
      <div className="flex flex-row justify-between text-xl mr-12 ml-8">
        <div className='cursor-pointer'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <div className="space-x-16 text-lg flex items-center">
          {
          //<HeaderLink name="About" href="#about" />
          }
          <HeaderLink name="FAQ" href="/faq" underlineColor='decoration-purple'/>
          <HeaderLink name="Top Projects" href="/projects" underlineColor='decoration-blue'/>
          {
            //<HeaderLink name="Schedule" href="#schedule" />
          }
          <HeaderLink name="Speakers" href="/speakers" underlineColor='decoration-pink'/>
          <HeaderLink name="Prizes" href="/prizes" underlineColor='decoration-yellow'/>
          {
          //<HeaderLink name="Sponsors" href="#sponsors" />
          }
        </div>
      </div>
    </header>
  );
}
