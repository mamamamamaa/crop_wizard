import { useAuthStore } from "@/lib/authStore";
import Head from "next/head";

import { ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { TNextPageWithLayout } from "@/types";

const Home: TNextPageWithLayout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const token = useAuthStore((state) => state.accessToken);
  const login = useAuthStore((state) => state.login);

  const googleAuthLink = `${process.env.SERVER}/api/auth/google/callback`;

  return (
    <div>
      <Head>
        <title>CropWizard</title>
      </Head>

      <a href={googleAuthLink}>Google auth - {String(isLoggedIn)}</a>
      <div>
        <button
          type="button"
          onClick={() =>
            login({
              email: "nevawew278@djpich.com",
              password: "qwerty123456",
            })
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
