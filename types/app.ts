import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

export type TNextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type TProps = Pick<AppProps & TLayoutProps, "Component" | "pageProps">;

export type TLayoutProps = {
  Component: TNextPageWithLayout;
};
