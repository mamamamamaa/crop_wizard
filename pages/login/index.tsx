import Head from "next/head";
import type { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuthStore } from "@/lib/auth/store";
import { SignIn, TNextPageWithLayout } from "@/types";
import { AuthCard } from "@/components/AuthCard/AuthCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { restrictIfAuthenticated } from "@/utils/restrictIfAuthenticated";

import style from "@/components/AuthCard/AuthCard.module.css";

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
  const login = useAuthStore((state) => state.login);
  const { register: formRegister, handleSubmit } = useForm<SignIn>();
  const onSubmit: SubmitHandler<SignIn> = (data) => login(data);

  return (
    <>
      <div className={style.sectionWrapper}>
        <AuthCard
          register={formRegister}
          handleSubmit={handleSubmit}
          header="Sign in"
          pathToReturn="/register"
          inputData={inputData}
          subtext={subtext}
          onSubmit={onSubmit}
        />
      </div>
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

// Restricted route
export const getServerSideProps: GetServerSideProps = async (context) => {
  return (
    restrictIfAuthenticated(context) || {
      props: {},
    }
  );
};

export default Login;
