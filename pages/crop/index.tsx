import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";

interface ICropProps {
  token: string;
}

const Crop: TNextPageWithLayout<ICropProps> = ({ token }) => {
  return <>Crop Page - {token}</>;
};

Crop.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Crop;
