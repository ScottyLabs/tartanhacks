import type { NextPage } from "next";
import Hero from "../src/components/Hero";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <BaseLayout className={styles.main}>
      <Hero />
    </BaseLayout>
  );
};

export default Home;
