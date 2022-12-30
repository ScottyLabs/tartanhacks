import type { NextPage } from "next";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Speakers from "../src/components/Speakers";
import Prizes from "../src/components/Prizes";
import FAQs from "../src/components/FAQ";
import Sponsors from "../src/components/Sponsors";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <BaseLayout className={styles.main}>
      <Hero />
      <About />
      <Speakers />
      <Prizes />
      <FAQs />
      <Sponsors />
      <Footer />
    </BaseLayout>
  );
};

export default Home;
