import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import FAQs from '../src/components/FAQ';
import Prizes from '../src/components/Prizes';
import Schedule from '../src/components/Schedule';
import BaseLayout from '../src/layouts/BaseLayout';
import Sponsors from '../src/components/Sponsors';
import Speakers from '../src/components/Speakers';
import TopProjects from '../src/components/TopProjects';
import Theme from '../src/components/Theme';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <FAQs />
      <Schedule />
      <Sponsors />
      <Speakers />
      <Prizes />
      <TopProjects />
    </>
  );
};

export default Home;
