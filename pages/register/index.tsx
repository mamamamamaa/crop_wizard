import { SignIn, TNextPageWithLayout } from "@/types";
import { ReactElement } from "react";
import { AuthLayout } from "@/components/AuthLayout/AuthLayout";
import { useForm } from "react-hook-form";
import { AuthCard } from "@/components/AuthCard/AuthCard";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { restrictIfAuthenticated } from "@/utils/restrictIfAuthenticated";

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
  const { register, handleSubmit } = useForm<SignIn>();

  return (
    <AuthCard
      register={register}
      handleSubmit={handleSubmit}
      header="Sign up"
      pathToReturn="/login"
      inputData={inputData}
      subtext={subtext}
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
