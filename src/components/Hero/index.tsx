import clsx from 'clsx';
import { useRouter } from 'next/router';
import Jumbotron from '../../svg/Jumbotron';
import TiledBackground from '../../svg/TiledBackground';
import styles from './index.module.scss';

export function RegisterButton({ className }: { className?: string }) {
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
        <div className="border-2 border-black py-3 px-6 text-2xl font-medium bg-yellow text-black rounded-xl cursor-pointer hover:bg-black hover:text-yellow hover:border-yellow">
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
        <div className="text-beige md:mt-28 m-auto">
          <Jumbotron
            className={clsx(styles.jumbotron, 'w-[80vw] lg:w-[40vw] ')}
          />
          <RegisterButton className="mt-10 shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
