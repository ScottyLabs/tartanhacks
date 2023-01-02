import Logo from '../../public/svg/logo.svg';
import {useRouter} from 'next/router';

export function HeroRegister() {
  const router = useRouter();
  let registerLink = `https://register.tartanhacks.com/register`;
  if ('utm_source' in router.query) {
    registerLink = `${registerLink}?utm_source=${router.query["utm_source"]}`;
  }

  return (
    <div className="text-beige flex justify-center mt-8">
      <a
        href={registerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="border-2 border-black py-2 px-8 text-xl bg-blue text-black rounded-xl cursor-pointer hover:bg-black hover:text-blue hover:border-blue">
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
        <div className="text-beige m-auto">
          <div>
            <div className="flex text-4xl sm:text-6xl items-baseline">
              <Logo className="leading-4 h-[0.7em] mr-4"/>
              <h1 className="flex-initial font-bold">TartanHacks 2023</h1>
            </div>
            <h2 className="text-lg sm:text-3xl">February 3 - 4</h2>
          </div>
          <HeroRegister/>
        </div>
      </div>
    </div>
  );
}
