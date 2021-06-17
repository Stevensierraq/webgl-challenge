import React from 'react';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Adidas Challenge</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <canvas id='webgl' />
  </>
};

export default MyApp
