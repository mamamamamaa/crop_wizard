import { useStore } from "@/lib/store";
import Head from "next/head";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";

const Home: NextPageWithLayout = () => {
  const {} = useStore((state) => state);

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
