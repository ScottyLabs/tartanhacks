import Countdown, { CountdownRenderProps } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
  return (
    <div className="z-10 text-center">
    <div className="items-center justify-center grid grid-cols-2 sm:grid-cols-4 gap-10 z-30 p-8">
      <div className="">
        <h2 className="font-basteleur text-6xl">{days}</h2>
        <p className="text-2xl">days</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-basteleur text-6xl">{hours}</h2>
        <p className="text-2xl">hours</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-basteleur text-6xl">{minutes}</h2>
        <p className="text-2xl">minutes</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-basteleur text-6xl">{seconds}</h2>
        <p className="text-2xl">seconds</p>
      </div>
    </div>
    </div>
  )
};

export function DeadlineCountdown() {
  return (
      <Countdown date={Date.UTC(2025, 0, 25, 5)} renderer={renderer} />
  );
}
