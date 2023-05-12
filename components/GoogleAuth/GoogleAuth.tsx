import Image from "next/image";
import style from "./GoogleAuth.module.css";
import { GOOGLE_ICON } from "@/public/consts";

export const GoogleAuth = () => {
  return (
    <section>
      <a
        className={style.link}
        href={`${process.env.SERVER}/api/auth/google/callback`}
      >
        <Image
          width={24}
          height={24}
          src={GOOGLE_ICON}
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </a>
    </section>
  );
};
