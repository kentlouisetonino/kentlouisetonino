import HeadTitle from '@/src/libs/HeadTitle/HeadTitle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <HeadTitle />
      <Component {...pageProps} />
    </Fragment>
  );
}
