import { RegisterButton } from './register';

export function Hero() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="z-30">
        <img src="/tartanhacks.svg" alt="tartanhacks" className="px-10" />
      </div>

      <div className="text-md mt-6 lg:mt-12 lg:text-xl z-30 md:hidden">Presented by...</div>

      <div className="z-30 mt-4 flex items-center justify-center gap-2 text-center lg:mt-8 lg:gap-6">
        <div className="hidden md:inline md:text-2xl font-bold lg:inline lg:text-5xl">Presented by</div>
        <span className="text-2xl font-bold lg:text-5xl">ScottyLabs</span>
        <img src="/dog.svg" alt="dog" className="w-8 lg:w-10" />
        <span className="text-2xl font-bold lg:text-5xl">&</span>
        <span>
          <img src="/sponsors/applovin.svg" alt="applovin" className="w-40 lg:w-64" />
        </span>
      </div>

      <p className="text-md mt-4 lg:mt-8 lg:text-xl z-30">Feb 7 — 8, 2025</p>

      <div className="mt-5 lg:mt-10">
        <RegisterButton />
      </div>
    </section>
  );
}
