import { FC } from "react";
import Link from "next/link";

import { AuthCardProps } from "@/types";
import { Logo } from "@/components/Logo/Logo";
import { AuthForm } from "@/components/AuthForm/AuthForm";
import { GoogleAuth } from "@/components/GoogleAuth/GoogleAuth";

import style from "./AuthCard.module.css";

export const AuthCard: FC<AuthCardProps> = (props) => {
  const { header } = props;

  return (
    <>
      <section className={style.logoSection}>
        <Link href="/" className="flex">
          <Logo color="text-white" size={55} />
        </Link>
      </section>
      <section className={style.cardWrapper}>
        <header>
          <h1 className={style.header}>{header}</h1>
        </header>
        <section className={style.formSection}>
          <AuthForm {...props} />
          <div className={style.relative}>OR</div>
          <GoogleAuth />
        </section>
      </section>
    </>
  );
};
