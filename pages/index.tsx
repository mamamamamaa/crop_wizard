import { useAuthStore } from "@/lib/authStore";
import Head from "next/head";

import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";

const Home: TNextPageWithLayout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const googleAuthLink = `${process.env.SERVER}/api/auth/google/callback`;

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>

      <a href={googleAuthLink}>Google auth - {String(isLoggedIn)}</a>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
