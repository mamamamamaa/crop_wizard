import type { ReactElement } from "react";
import { TNextPageWithLayout } from "@/types";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";

const Login: TNextPageWithLayout = () => {
  return <p>hello world</p>;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
