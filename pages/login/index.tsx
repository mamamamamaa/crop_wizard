import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import { Layout } from "@/components/Layout/Layout";

const Login: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
