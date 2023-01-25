import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import FAQs from '../src/components/FAQ';
import Schedule from '../src/components/Schedule';
import BaseLayout from '../src/layouts/BaseLayout';
import Sponsors from '../src/components/Sponsors';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Schedule />
      <FAQs />
      <Sponsors />
    </BaseLayout>
  );
};

export default Home;
