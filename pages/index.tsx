import type { NextPage } from "next";
import Text from "../src/components/Text";
import TartanHacksIcon from "../src/icons/TartanHacksIcon";
import BaseLayout from "../src/layouts/BaseLayout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <BaseLayout className={styles.main}>
      <TartanHacksIcon className={styles.homeIcon} />
      <div className={styles.heroText}>
        <div className={styles.heroSpacerStart} />
        <Text variant="hero" className={styles.heroTitle}>
          TARTANHACKS
        </Text>
        <Text variant="hero" className={styles.heroYear}>
          2022
        </Text>
        <div className={styles.heroSpacerEnd} />
      </div>
    </BaseLayout>
  );
};

export default Home;
