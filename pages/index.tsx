import { useStore } from "@/lib/store";
import Head from "next/head";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";

const Home: NextPageWithLayout = () => {
  // const { isLoading, email } = useStore((state) => state.auth.data);

  const googleAuthLink = `${process.env.SERVER}/api/auth/google/callback`;

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>

      <a href={googleAuthLink}>Google auth</a>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
