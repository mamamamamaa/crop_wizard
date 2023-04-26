import type { ReactElement } from "react";
import type { TNextPageWithLayout } from "../_app";

import { Layout } from "@/components/Layout/Layout";

const Login: TNextPageWithLayout = () => {
  return <p>hello world</p>;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
