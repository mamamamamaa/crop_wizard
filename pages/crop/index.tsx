import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";
import { initializeAuthStore, useAuthStore } from "@/lib/authStore";
import { GetServerSideProps } from "next";

interface ICropProps {
  token: string;
}

const Crop: TNextPageWithLayout<ICropProps> = ({ token }) => {
  return <>Crop Page - {token}</>;
};

Crop.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const zustandStore = initializeAuthStore();

  return {
    props: {
      initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
    },
  };
};
export default Crop;
