import type { ReactElement } from "react";
import { TNextPageWithLayout } from "@/types";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { LoginCard } from "@/components/LoginCard/LoginCard";

const Login: TNextPageWithLayout = () => {
  return <LoginCard />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
