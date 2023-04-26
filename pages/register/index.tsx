import { TNextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const Register: TNextPageWithLayout = () => {
  return <>Register Page</>;
};

Register.getLayout = function (page: ReactElement) {
  return <>Without layout {page}</>;
};

export default Register;
