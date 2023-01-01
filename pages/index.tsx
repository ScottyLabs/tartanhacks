import type { NextPage } from 'next';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import FAQs from '../src/components/FAQ';
import BaseLayout from '../src/layouts/BaseLayout';

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <FAQs />
    </BaseLayout>
  );
};

export default Home;
