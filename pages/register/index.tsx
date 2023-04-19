import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const Register: NextPageWithLayout = () => {
  return <>Register Page</>;
};

Register.getLayout = function (page: ReactElement) {
  return <>Without layout {page}</>;
};

export default Register;
