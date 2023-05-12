import Head from "next/head";

import { ReactElement, useState } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";
import { ReverifyTimer } from "@/components/ReverifyTimer/ReverifyTimer";

const Home: TNextPageWithLayout = () => {
  const [isTimeOut, setTimeOut] = useState<boolean>(false);

  return (
    <>
      <ReverifyTimer setTimeOut={setTimeOut} />
      {isTimeOut && <p>Time out</p>}
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
