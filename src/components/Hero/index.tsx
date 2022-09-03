import Link from "next/link";
import HeroBackground from "../../svg/HeroBackground";
import TartanHacksIcon from "../../svg/TartanHacksIcon";
import Text from "../Text";
import styles from "./index.module.scss";

export default function Hero() {
  return (
    <>
      <Link href="#" passHref>
        <a>
          <TartanHacksIcon className={styles.homeIcon} />
        </a>
      </Link>
      <div className={styles.heroBackgroundContainer}>
        <HeroBackground className={styles.heroBackground} />
      </div>
      <div className={styles.heroText}>
        <div className={styles.heroSpacerStart} />
        <Text variant="hero" className={styles.heroTitle}>
          TARTANHACKS
        </Text>
        <Text variant="hero" className={styles.heroYear}>
          2023
        </Text>
        <div className={styles.heroSpacerEnd} />
      </div>
      <div className={styles.eventDate}>
        <Text variant="h2">FEB 4-6, 2023</Text>
      </div>
    </>
  );
}
