import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>next-tailwind</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
