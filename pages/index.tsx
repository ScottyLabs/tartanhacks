import type { NextPage } from "next";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <BaseLayout className={styles.main}>
      <Hero />
      <Footer />
    </BaseLayout>
  );
};

export default Home;
