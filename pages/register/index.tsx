import { ReactElement } from "react";
import { TNextPageWithLayout } from "@/types";
import { Layout } from "@/components/Layout/Layout";

const Register: TNextPageWithLayout = () => {
  return <>Register Page</>;
};

Register.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Register;
