export function Speakers() {
  return (
    <section className="relative z-40 flex flex-col items-center justify-center pb-24" id="speakers">
      <hr className="my-8 h-px w-3/4 border-0 bg-white md:w-2/3" />
      <h1 className="z-30 mt-24 px-10 font-basteleur text-5xl uppercase md:text-8xl">Speakers</h1>
      <div className="z-30 w-3/4 pt-8 text-center font-sfpro text-xl text-white md:w-2/3">
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          <div className="flex basis-1/2 flex-col py-8">
            <a href="https://zicokolter.com">
              <img alt="zicokolter" src="/speakers/zicokolter.jpg"></img>
            </a>
          </div>
          <div className="flex basis-1/2 flex-col text-center md:text-left">
            <a href="https://zicokolter.com" className="pb-2 font-basteleur text-7xl uppercase">
              Zico Kolter
            </a>
            <h2>Professor, Director of Machine Learning Department @ CMU</h2>
            <h2>Board Member @ OpenAI</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
