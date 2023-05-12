import type { ReactElement } from "react";
import { SignIn, TNextPageWithLayout } from "@/types";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { AuthCard } from "@/components/AuthCard/AuthCard";
import { useForm } from "react-hook-form";
import Head from "next/head";

const inputData = [
  {
    inputId: "email",
    placeholder: "mamamamama@mama.com",
    value: "Email",
  },
  {
    inputId: "password",
    placeholder: "qwerty123456",
    value: "Password",
  },
];

const subtext = {
  part1: "New user?",
  part2: "Create account",
};

const Login: TNextPageWithLayout = () => {
  const { register, handleSubmit } = useForm<SignIn>();

  return (
    <>
      <AuthCard
        register={register}
        handleSubmit={handleSubmit}
        header="Sign in"
        pathToReturn="/register"
        inputData={inputData}
        subtext={subtext}
      />
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      {page}
    </AuthLayout>
  );
};

export default Login;
