import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/Layout/Layout";

const Crop: NextPageWithLayout = () => {
  return <>Crop Page</>;
};

Crop.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Crop;
