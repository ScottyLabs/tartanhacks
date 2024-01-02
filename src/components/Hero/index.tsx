import clsx from 'clsx';
import { useRouter } from 'next/router';
import Jumbotron from '../../svg/Jumbotron';

import Image from 'next/image';
import Link from 'next/link';
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
      <a href={registerLink} target='_blank' rel='noopener noreferrer'>
        <div
          className='border-2 border-black py-3 px-6 text-2xl font-medium bg-pink text-black rounded-xl cursor-pointer hover:bg-black hover:text-pink hover:border-pink'>
          Register Now!
        </div>
      </a>
    </div>
  );
}

export default function Hero() {
  return (
      <div className='flex flex-col justify-center'>
        <div className='text-beige m-auto'>
          <Jumbotron
            className='w-[80vw] lg:w-[40vw] '
          />
          <RegisterButton
            className={clsx(styles.registerButton, 'mt-10 mb-4')}
          />
        </div>
      </div>
  );
}
