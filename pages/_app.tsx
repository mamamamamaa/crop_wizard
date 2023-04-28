import "@/styles/globals.css";
import { StoreProvider } from "@/lib/StoreProvider";
import qs from "querystring";
import App, { AppContext } from "next/app";
import { TProps } from "@/types";

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

  const { accessToken, user } = parsedCookies;

  if (!user) {
    return { ...ctx };
  }

  const parsedUser = JSON.parse(String(user));

  const initialZustandState = {
    accessToken: accessToken,
    username: parsedUser.username,
    email: parsedUser.email,
  };

  return { ...ctx, pageProps: { ...ctx.pageProps, initialZustandState } };
};

export default CustomApp;
