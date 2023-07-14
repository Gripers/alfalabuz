import '@/styles/globals.scss';
import 'aos/dist/aos.css';
import 'react-modern-drawer/dist/index.css';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <NextNProgress height={2} color='white' options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
