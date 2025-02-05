export function Sponsors() {
  return (
    <section
      className="flex flex-col justify-center items-center pb-24"
      id="sponsors"
    >
      <hr className="h-px my-8 w-3/4 md:w-2/3 bg-white border-0" />
      <h1 className="mt-24 px-10 uppercase font-basteleur text-5xl md:text-8xl z-30">
        Sponsors
      </h1>
      <img src="/sponsors/applovin.svg" alt="applovin" className="px-4 md:px-8 pt-24 pb-4 md:max-w-5xl" />
      <div className="flex flex-wrap w-full justify-center items-center py-4 12 z-30">
        <img src="/sponsors/story.svg" alt="hrt" className="px-4 md:px-8 w-48 md:w-80 my-4" />
        <img src="/sponsors/ripple.svg" alt="sandia" className="px-4 md:px-8 w-48 md:w-80 mt-4" />
      </div>
      <div className="flex flex-wrap w-full justify-center items-center 12 z-30">
        <img src="/sponsors/bny.svg" alt="bny" className="px-4 md:px-8 w-36 md:w-64 my-4" />
        <img src="/sponsors/oracle.svg" alt="oracle" className="px-4 md:px-8 w-36 md:w-64 my-4" />
        <img src="/sponsors/sandia.svg" alt="sandia" className="px-4 md:px-8 w-36 md:w-64 my-4" />
        <img src="/sponsors/bloomberg.svg" alt="bloomberg" className="px-4 md:px-8 w-36 md:w-64 my-4" />
      </div>
      <div className="flex flex-wrap w-full justify-center items-center 12 z-30">
        <img src="/sponsors/stripe.svg" alt="stripe" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/jane.svg" alt="jane" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/cylab.svg" alt="jane" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/roboclub.svg" alt="roboclub" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/hrt.svg" alt="hrt" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/perplexity.svg" alt="perplexity" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
        <img src="/sponsors/qcclub.svg" alt="qcclub" className="px-4 md:px-8 w-24 md:w-52 my-2 md:my-4" />
      </div>
    </section>
  );
}
