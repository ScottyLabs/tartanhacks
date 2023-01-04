import Logo from '../../public/svg/logo.svg';
import { useRouter } from 'next/router';
import Jumbotron from '../svg/Jumbotron';
import TiledBackground from '../svg/TiledBackground';

export function HeroRegister() {
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
    <div className="text-beige flex justify-center mt-8">
      <a href={registerLink} target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-black py-2 px-8 text-xl bg-blue text-black rounded-xl cursor-pointer hover:bg-black hover:text-blue hover:border-blue">
          Register
        </div>
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="h-screen">
      {/* TODO: Use grid? */}
      <div className="flex h-screen flex-col justify-center">
        <TiledBackground />
        <div className="text-beige m-auto">
          <Jumbotron className="w-4/5" />
          <HeroRegister />
        </div>
      </div>
    </div>
  );
}
