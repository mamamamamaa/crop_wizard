import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "@/lib/StoreProvider";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import cookies from "js-cookie";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <StoreProvider {...pageProps.initialZustandState}>
        {getLayout(<Component {...pageProps} />)}
      </StoreProvider>
    </>
  );
}
