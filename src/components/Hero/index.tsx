import Link from "next/link";
import HeroBackground from "../../svg/HeroBackground";
import TartanHacksIcon from "../../svg/TartanHacksIcon";
import DotMatrix, { DotColor, DotOpacity, MatrixSpacing } from "../DotMatrix";
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

      <DotMatrix width={3} height={3} className={styles.dotMatrixTopLeft} />

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

      <DotMatrix width={3} height={3} className={styles.dotMatrixMidRight} />
      <DotMatrix
        width={3}
        height={4}
        className={styles.dotMatrixBottomLeft}
        dotColor={DotColor.SECONDARY}
        dotOpacity={DotOpacity.FADED}
        matrixSpacing={MatrixSpacing.SPARSE}
      />

      <div className={styles.eventDate}>
        <Text variant="h2">FEB 2023</Text>
      </div>
    </>
  );
}
