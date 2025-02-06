import { Header } from "../components/Header";
import { Hero } from "../components/hero";
import { Desc } from "../components/desc";
import { Theme } from "../components/Theme";
import { Sponsors } from "../components/Sponsors";
import { Speakers } from "../components/Speakers";
import { MLH } from "../components/mlh";
import { Prizes } from "../components/Prizes";
import { Schedule } from "../components/Schedule";
import { Faqs } from "../components/faqs";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Desc />
			<Theme />
			<Schedule />
      <Speakers />
			<MLH />
			<Prizes />
			<Sponsors />
			<Faqs />
		</div>
	);
}
