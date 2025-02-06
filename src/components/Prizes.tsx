export function Prizes() {
  return (
    <section
      className="flex flex-col justify-center items-center pb-24"
      id="prizes"
    >
      <hr className="h-px my-8 w-3/4 md:w-2/3 bg-white border-0" />
      <h1 className="mt-24 px-10 uppercase font-basteleur text-5xl md:text-8xl z-30">
        Prizes
      </h1>
      <h1 className="mt-24 px-10 uppercase font-basteleur text-xl md:text-3xl z-30">
        ScottyLabs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center gap-4 z-30 px-10 pt-10 text-sfpro">
        <div className="text-center p-4" style={{ backgroundImage: "url('/prize.svg')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <h2 className="font-bold text-lg">Scott Krulcik Grand Prize</h2>
          <p className="text-lg font-basteleur">$5,000</p>
        </div>
        <div className="text-center p-4" style={{ backgroundImage: "url('/prize.svg')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <h2 className="font-bold text-lg">2nd Place Overall</h2>
          <p className="text-lg font-basteleur">$2,000</p>
        </div>
        <div className="text-center p-4" style={{ backgroundImage: "url('/prize.svg')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <h2 className="font-bold text-lg">3rd Place Overall</h2>
          <p className="text-lg font-basteleur">$1,000</p>
        </div>
      </div>
    </section>
  );
}
