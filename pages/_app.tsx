import "@/styles/globals.css";
import { StoreProvider } from "@/lib/StoreProvider";
import qs from "querystring";
import App, { AppContext } from "next/app";
import { TProps } from "@/types";
import fetch, { setAuthHeader } from "@/utils/fetch";

function CustomApp({ Component, pageProps }: TProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <StoreProvider {...pageProps.initialZustandState}>
      {getLayout(<Component {...pageProps} />)}
    </StoreProvider>
  );
}

CustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  const headers = context.ctx.req ? context.ctx.req.headers : {};
  const cookies = headers.cookie || "";

  const parsedCookies = qs.decode(cookies, "; ");

  const { accessToken } = parsedCookies as { accessToken: string };

  if (!accessToken) {
    return { ...ctx };
  }

  setAuthHeader(accessToken);

  try {
    const { data } = await fetch.get(`/api/auth/current`);

    const initialZustandState = {
      accessToken: accessToken,
      isLoggedIn: true,
      ...data,
    };

    return { ...ctx, pageProps: { ...ctx.pageProps, initialZustandState } };
  } catch (error) {
    return { ...ctx };
  }
};

export default CustomApp;
