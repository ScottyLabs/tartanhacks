import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Theme } from "../components/theme";
import { Desc } from "../components/desc";
import { Schedule } from "../components/schedule";
import { Speakers } from "../components/speakers";
import { Prizes } from "../components/prizes";
import { Sponsors } from "../components/sponsors";
import { Faqs } from "../components/faqs";
import { MLH } from "../components/mlh";

export function App() {
  return (
    <div className="relative font-sfpro bg-gradient-to-b from-50% to-100% from-[#0B3B48] to-[#062128] text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/left_swirl.svg')] bg-no-repeat bg-left-top"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/right_swirl.svg')] bg-no-repeat bg-right-top invisible md:visible"></div>
      <Header />
      <Hero />
      <Desc />
      <Theme />
      <Sponsors />
      <Speakers />
      <MLH />
      <Prizes />
      <Schedule />
      <Faqs />
    </div>
  );
}

export default App;
