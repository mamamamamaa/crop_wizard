import type { ReactElement } from "react";

import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { redirectIfUnauthenticated } from "@/utils/redirectIfUnauthenticated";

export const metadata = {
  title: "Register",
};

const Profile: TNextPageWithLayout = () => {
  return (
    <>
      <p>Profile page</p>
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

// Private route
export const getServerSideProps: GetServerSideProps = async (context) => {
  return (
    redirectIfUnauthenticated(context) || {
      props: {},
    }
  );
};

export default Profile;
