import { useAuthStore } from "@/lib/authStore";
import Head from "next/head";
import { TNextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";

const Home: TNextPageWithLayout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const login = useAuthStore((state) => state.login);
  const accessToken = useAuthStore((state) => state.accessToken);

  const googleAuthLink = `${process.env.SERVER}/api/auth/google/callback`;

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>

      <a href={googleAuthLink}>Google auth - {String(isLoggedIn)}</a>

      <button
        type="button"
        onClick={() =>
          login({
            email: "string",
            password: "string",
          })
        }
      >
        Toggle
      </button>
      <h1>{accessToken}</h1>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
