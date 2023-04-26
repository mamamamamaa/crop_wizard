import "@/styles/globals.css";
import { StoreProvider } from "@/lib/StoreProvider";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import qs, { ParsedUrlQuery } from "querystring";
import App, { AppContext, AppProps } from "next/app";

export type TNextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type TCookiesData = {
  cookies: ParsedUrlQuery;
};

type TProps = Pick<AppProps & TLayoutProps, "Component" | "pageProps"> &
  TCookiesData;

type TLayoutProps = {
  Component: TNextPageWithLayout;
};

function MyCustomApp({ Component, pageProps, cookies }: TProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <h1>token: {cookies.accessToken}</h1>
      <StoreProvider {...pageProps.initialZustandState} cookies={cookies}>
        {getLayout(<Component {...pageProps} />)}
      </StoreProvider>
    </>
  );
}

MyCustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  const headers = context.ctx.req ? context.ctx.req.headers : {};
  const cookies = headers.cookie || "";
  const parsedCookies = qs.decode(cookies, "; ");

  return { ...ctx, cookies: parsedCookies };
};

export default MyCustomApp;
