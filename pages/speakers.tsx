import ComingSoon from "../src/svg/ComingSoon";

export default function SpeakerPage() {
  const info = `Get ready to have your minds amped up with inspiration from our brilliant speakers!`
  return (
      <div className="w-2/3 m-auto text-center text-white">
        <h1 className="font-title text-4xl md:text-7xl mt-48">
          Speakers
        </h1>
        <p className="text-xl mt-36">{info}</p>
        <ComingSoon className="w-[80vw]" />
      </div>
  )
}