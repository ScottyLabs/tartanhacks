import Link from "next/link";
import Text from "../Text";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text variant="body">
        Made with ❤️ by&nbsp;
        <Link
          href="mailto://tartanhacks@scottylabs.org"
          target="_blank"
          rel="noreferrer"
          passHref
        >
          <a className={styles.footerLink}>ScottyLabs</a>
        </Link>
      </Text>
    </footer>
  );
}
