import { Desc } from "../components/desc";
import { Faqs } from "../components/faqs";
import { Header } from "../components/Header";
import { Hero } from "../components/hero";
import { MLH } from "../components/mlh";
import { Prizes } from "../components/Prizes";
import { Schedule } from "../components/Schedule";
import { Speakers } from "../components/Speakers";
import { Sponsors } from "../components/Sponsors";
import { Theme } from "../components/Theme";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Desc />
      <Theme />
      <Schedule />
      <div className="absolute z-20 h-full w-full bg-[url('/compass2.svg')] bg-right-top bg-no-repeat"></div>
      <Speakers />
      <MLH />
      <Prizes />
      <Sponsors />
      <Faqs />
    </div>
  );
}
