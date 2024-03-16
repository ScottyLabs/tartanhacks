/* eslint-disable */
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import About from '../components/About';
import FAQs from '../components/FAQ';
import Prizes from '../components/Prizes';
import Schedule from '../components/Schedule';
import Sponsors from '../components/Sponsors';
import Speakers from '../components/Speakers';
import Theme from '../components/Theme';
import Partners from '../components/Partners';

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
