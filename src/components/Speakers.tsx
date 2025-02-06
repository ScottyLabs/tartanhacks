export function Speakers() {
  return (
    <section
      className="relative flex flex-col justify-center items-center pb-24 z-40"
      id="speakers"
    >
      <hr className="h-px my-8 w-3/4 md:w-2/3 bg-white border-0" />
      <h1 className="mt-24 px-10 uppercase font-basteleur text-5xl md:text-8xl z-30">
        Speakers
      </h1>
      <div className="text-white text-center text-xl font-sfpro w-3/4 md:w-2/3 pt-8 z-30">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center">
          <div className="flex flex-col basis-1/2 py-8">
            <a href="https://zicokolter.com">
              <img alt="zicokolter" src="/speakers/zicokolter.jpg"></img>
            </a>
          </div>
          <div className="flex flex-col basis-1/2 text-center md:text-left">
            <a
              href="https://zicokolter.com"
              className="text-7xl font-basteleur pb-2 uppercase"
            >
              Zico Kolter
            </a>
            <h2>Professor, Director of Machine Learning Department @ CMU</h2>
            <h2>Board Member @ OpenAI</h2>
          </div>
        </div>
        <p className="pt-8">Other speakers to be announced!</p>
      </div>
    </section>
  );
}
