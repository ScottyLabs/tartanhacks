import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle as faCircleHollow } from "@fortawesome/free-regular-svg-icons";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  library.add(faCircleHollow);
  return <Component {...pageProps} />;
}

export default MyApp;
