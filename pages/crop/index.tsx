import { ReactElement } from "react";
import { TNextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/Layout/Layout";

const Crop: TNextPageWithLayout = () => {
  return <>Crop Page</>;
};

Crop.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Crop;
