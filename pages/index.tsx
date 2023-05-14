import Head from "next/head";

import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";
import { VerifyCard } from "@/components/VerifyCard/VerifyCard";

const Home: TNextPageWithLayout = () => {
  return (
    <>
      <h1> Home page</h1>
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>CropWizard</title>
      </Head>
      {page}
    </Layout>
  );
};

export default Home;
