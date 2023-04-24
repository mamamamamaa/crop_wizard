import { useAuthStore } from "@/lib/authStore";
import Head from "next/head";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { useImageStore } from "@/lib/imageStore";

const Home: NextPageWithLayout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const a = useImageStore((state) => state.isLoading);
  const saveImage = useImageStore((state) => state.saveImage);

  const googleAuthLink = `${process.env.SERVER}/api/auth/google/callback`;

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>

      <a href={googleAuthLink}>
        Google auth - {String(isLoggedIn)} - {String(a)}
      </a>

      <button type="button" onClick={() => saveImage()}>
        Toggle
      </button>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
