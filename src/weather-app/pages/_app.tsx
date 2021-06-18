import React, { useEffect } from 'react';
import Head from 'next/head';
import LogRocket from 'logrocket';
import getConfig from 'next/config';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { LOGROCKET_KEY } = getConfig().publicRuntimeConfig;
    if(LOGROCKET_KEY) {
      LogRocket.init(LOGROCKET_KEY);
    };
  }, []);

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
