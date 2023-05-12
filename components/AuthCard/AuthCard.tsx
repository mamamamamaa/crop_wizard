import { FC } from "react";

import { AuthCardProps } from "@/types";

import style from "./AuthCard.module.css";
import { Logo } from "@/components/Logo/Logo";
import { GoogleAuth } from "@/components/GoogleAuth/GoogleAuth";
import { AuthForm } from "@/components/AuthForm/AuthForm";
import Link from "next/link";

export const AuthCard: FC<AuthCardProps> = (props) => {
  const { header } = props;

  return (
    <>
      <div className={style.sectionWrapper}>
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
      </div>
    </>
  );
};
