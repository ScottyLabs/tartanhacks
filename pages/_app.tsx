import type { AppProps } from 'next/app';
import '../styles/globals.css';
import BaseLayout from '../src/layouts/BaseLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />;
    </BaseLayout>
  )
}

export default MyApp;
