import Head from "next/head";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";

import { SignIn, SignUp, TNextPageWithLayout } from "@/types";
import { AuthCard } from "@/components/AuthCard/AuthCard";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { restrictIfAuthenticated } from "@/utils/restrictIfAuthenticated";
import { useAuthStore } from "@/lib/authStore";

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
  const register = useAuthStore((state) => state.register);
  const { register: formRegister, handleSubmit } = useForm<SignIn>();
  const onSubmit: SubmitHandler<SignUp> = (data) => register(data);

  return (
    <AuthCard
      register={formRegister}
      handleSubmit={handleSubmit}
      header="Sign up"
      pathToReturn="/login"
      inputData={inputData}
      subtext={subtext}
      onSubmit={onSubmit}
    />
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
