import { RegisterButton } from "./register";

export function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center flex-col">
      <div className="z-30">
        <img src="/tartanhacks.svg" alt="tartanhacks" className="px-10" />
      </div>

      <div className="mt-6 lg:mt-12 text-md lg:text-xl">Presented by...</div>

      <div className="text-center flex z-30 items-center mt-4 lg:mt-8 justify-center gap-2 lg:gap-6">
        <span className="text-2xl lg:text-5xl font-bold">ScottyLabs</span>
        <span className="text-sm lg:text-xl">&</span>
        <span>
          <img
            src="/sponsors/applovin.svg"
            alt="applovin"
            className="w-40 lg:w-64"
          />
        </span>
      </div>

      <p className="mt-4 lg:mt-8 text-md lg:text-xl">Feb 7 — 8, 2025</p>

      <div className="mt-5 lg:mt-10">
        <RegisterButton />
      </div>
    </section>
  );
}
