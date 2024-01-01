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
    <div className='h-screen'>
      <div className='flex h-screen flex-col justify-center'>
        <div className='text-beige m-auto'>
          <Jumbotron
            className='w-[80vw] lg:w-[40vw] '
          />
          <RegisterButton
            className={clsx(styles.registerButton, 'mt-10 shadow-2xl')}
          />
          <div className='mt-10 flex max-w-6xl gap-x-4 flex-col sm:flex-row items-center justify-center'>
            <div className='cursor-pointer'>
              <Link href='https://play.google.com/store/apps/details?id=org.scottylabs.thdapp&pli=1'>
                <Image src='/svg/google-play-badge.svg' height={60} width={180}/>
              </Link>
            </div>
            <div className='cursor-pointer'>
              <Link href='https://apps.apple.com/us/app/tartanhacks-dashboard/id1556362423'>
                <Image src='/svg/app-store.svg' height={60} width={160} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
