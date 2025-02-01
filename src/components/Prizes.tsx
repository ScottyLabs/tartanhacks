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
      <div className="text-white text-center text-xl font-sfpro w-2/3 md:w-1/2 pt-8 z-30">
        <b className="font-bold">
          Grand Prize: $2,000
        </b>
        <p>
          More prizes to be announced!
        </p>
      </div>
    </section>
  );
}
