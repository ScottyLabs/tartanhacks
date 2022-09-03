import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  library.add(faCircle);
  return <Component {...pageProps} />;
}

export default MyApp;
