import type { ReactElement } from "react";

import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";

const Login: TNextPageWithLayout = () => {
  return <p>hello world</p>;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
