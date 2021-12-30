import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "../styles/globals.css";
import { theme } from "src/themes/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TartanHacks</title>
        <meta name="description" content="TartanHacks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
