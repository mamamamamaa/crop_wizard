import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "@/lib/StoreProvider";
import { Layout } from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider {...pageProps.initialZustandState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}
