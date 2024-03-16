/* eslint-disable */
import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import FAQs from '../src/components/FAQ';
import Prizes from '../src/components/Prizes';
import Schedule from '../src/components/Schedule';
import Sponsors from '../src/components/Sponsors';
import Speakers from '../src/components/Speakers';
import Theme from '../src/components/Theme';
import Partners from '../src/components/Partners';

const Home: NextPage = () => (
	<div className="overflow-clip">
		<Hero />
		<About />
		<Theme />
		<Schedule />
		<Speakers />
		<Prizes />
		<Sponsors />
		<Partners />
		<FAQs />
		{/** <TopProjects /> */}
	</div>
);

export default Home;

/* eslint-enable */
