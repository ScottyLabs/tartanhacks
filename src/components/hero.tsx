import { RegisterButton } from "./register";

export function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center flex-col">
      <div className="z-30">
        <img src="/tartanhacks.svg" alt="tartanhacks" className="px-10" />
      </div>
      <div className="text-white text-center mt-8 font-thin font-futura z-30">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h2 className="text-xl md:text-2xl">Presented by ScottyLabs and</h2>
          <img src="/sponsors/applovin.svg" alt="applovin" className="px-10 w-56 md:w-64 -mx-8" />
        </div>
        <p className="text-xl">Feb 7 — 8, 2025</p>
      </div>
      <div className="mt-10">
        <RegisterButton />
      </div>
    </section>
  );
}
