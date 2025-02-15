export function Theme() {
  return (
    <section className="flex flex-col items-center py-24 text-center text-xl text-white" id="theme">
      <h3 className="z-30 mt-16 text-4xl font-bold md:text-5xl">This year's theme was...</h3>
      <h1 className="z-30 mt-8 px-10 font-basteleur text-5xl uppercase md:text-8xl">Changing Tides</h1>
      <div className="z-30 w-2/3 md:w-1/2">
        <p className="mt-12">
          Take your most swashbuckling of crewmates along as you steer your team toward waters unknown!
        </p>
        <p className="mt-8">
          For 24 hours, you are out on the open ocean. There is a stir in the wind… something brewing. All
          will be uprooted and start anew. Let the waves wash away everything that came before, leaving you
          with nothing but your ingenuity and companions as you search for hidden treasure!
        </p>
      </div>
    </section>
  );
}
