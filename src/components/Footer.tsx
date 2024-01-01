import Logo from '../../public/svg/logo.svg';
import Link from 'next/link';

function FooterLink({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <span className="text-yellow hover:text-blue cursor-pointer">
          {text}
        </span>
      </a>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="pb-3 z-30 w-full flex flex-col items-center justify-center text-pink">
      <span>
        <FooterLink text="Contact us" href="mailto://hello@scottylabs.org" />
      </span>
      <span>
        Made with &lt;3 by&nbsp;
        <FooterLink text="ScottyLabs" href="https://scottylabs.org/" />
      </span>
    </footer>
  );
}
