import { FC } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

import { SignIn } from "@/types";

import style from "./AuthCard.module.css";
import { Logo } from "@/components/Logo/Logo";
import { GoogleAuth } from "@/components/GoogleAuth/GoogleAuth";

export interface AuthCardProps {
  register: UseFormReturn;
  handleSubmit: UseFormReturn;
  header: string;
  pathToReturn: string;
  inputData: { inputId: string; value: string; placeholder: string }[];
}

export const AuthCard: FC<AuthCardProps> = (props) => {
  const onSubmit: SubmitHandler<SignIn> = (data) => console.log(data);

  return (
    <>
      <div className={style.sectionWrapper}>
        <section className={style.logoSection}>
          <Logo color="text-white" size={55} />
        </section>
        <section className={style.cardWrapper}>
          <header>
            <h1 className={style.header}>Sign In</h1>
          </header>
          <section className={style.formSection}>
            <div className={style.relative}>OR</div>
            <section>
              <GoogleAuth />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};
