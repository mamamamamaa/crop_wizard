import { TNextPageWithLayout } from "@/types";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";

const Register: TNextPageWithLayout = () => {
  return <>Register Page</>;
};

Register.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Register;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  console.log(req.cookies);
  return {
    props: {},
  };
};
