import Head from "next/head";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";

import { useAuthStore } from "@/lib/auth/store";
import { SignIn, SignUp, TNextPageWithLayout } from "@/types";
import { AuthCard } from "@/components/AuthCard/AuthCard";
import { VerifyCard } from "@/components/VerifyCard/VerifyCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { restrictIfAuthenticated } from "@/utils/restrictIfAuthenticated";

import style from "@/components/AuthCard/AuthCard.module.css";

const inputData = [
  {
    inputId: "username",
    placeholder: "mamamamama",
    value: "Username",
  },
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
  part1: "Already have an account?",
  part2: "Sign in",
};

const Register: TNextPageWithLayout = () => {
  const email = useAuthStore((state) => state.email);
  const register = useAuthStore((state) => state.register);
  const { register: formRegister, handleSubmit } = useForm<SignUp>();
  const onSubmit: SubmitHandler<SignUp> = (data) => register(data);

  return (
    <div className={style.sectionWrapper}>
      {!email && (
        <AuthCard
          register={formRegister}
          handleSubmit={handleSubmit}
          header="Sign up"
          pathToReturn="/login"
          inputData={inputData}
          subtext={subtext}
          onSubmit={onSubmit}
        />
      )}
      {email && <VerifyCard />}
    </div>
  );
};

Register.getLayout = function (page: ReactElement) {
  return (
    <AuthLayout>
      <Head>
        <title>Register</title>
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

export default Register;
