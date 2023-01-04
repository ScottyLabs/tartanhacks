import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../public/svg/logo.svg';

function HeaderLink({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} scroll={false}>
      <span className="hover:text-yellow cursor-pointer">{name}</span>
    </Link>
  );
}

export function RegisterButton({ className }: { className: string }) {
  const router = useRouter();
  let registerLink = `https://register.tartanhacks.com/register`;
  if (
    'utm_source' in router.query &&
    'utm_medium' in router.query &&
    'utm_campaign' in router.query
  ) {
    registerLink = `${registerLink}?utm_source=${router.query['utm_source']}&utm_medium=${router.query['utm_medium']}&utm_campaign=${router.query['utm_campaign']}`;
  }

  return (
    <div className={clsx(className, 'text-beige flex justify-center')}>
      <a href={registerLink} target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-black py-1 px-4 text-xl bg-blue text-black rounded-xl cursor-pointer hover:bg-black hover:text-blue hover:border-blue">
          Register
        </div>
      </a>
    </div>
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
          <HeaderLink name="FAQ" href="#faq" />
          <RegisterButton />
        </div>
      </div>
    </header>
  );
}
