import type { ReactElement } from "react";

import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";
import Head from "next/head";

export const metadata = {
  title: "Register",
};

const Profile: TNextPageWithLayout = () => {
  return (
    <>
      <p>Profile page</p>;
    </>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      {page}
    </Layout>
  );
};

export default Profile;
