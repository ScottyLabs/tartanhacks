import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Speakers from '../src/components/Speakers';
import Prizes from '../src/components/Prizes';
import FAQs from '../src/components/FAQ';
import Sponsors from '../src/components/Sponsors';
import BaseLayout from '../src/layouts/BaseLayout';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Speakers />
      <Prizes />
      <FAQs />
      <Sponsors />
    </BaseLayout>
  );
};

export default Home;
