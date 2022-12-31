import Logo from '../../public/svg/logo.svg';

export default function Hero() {
  return (
    <div className="h-screen">
      {/* TODO: Use grid? */}
      <div className="flex h-screen flex-col justify-center">
        <div className="text-beige m-auto">
          <div>
            <div className="flex text-4xl sm:text-6xl items-baseline">
              <Logo className="leading-4 h-[0.7em] mr-4" />
              <h1 className="flex-initial font-bold">TartanHacks 2023</h1>
            </div>
            <h2 className="text-lg sm:text-3xl">February 4 - 6</h2>
          </div>
          <div className="text-beige flex justify-center mt-8">
            <div className="py-2 px-8 text-xl bg-blue text-black rounded-xl">
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
