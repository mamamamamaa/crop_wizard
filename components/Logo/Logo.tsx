import { FC } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import style from "./Logo.module.css";

export const Logo: FC = () => {
  return (
    <>
      <Image
        src={logo}
        alt="cropp wizard logo"
        className={style.logoSvgStyles}
      />
      <span className={style.logoTextStylesP1}>
        Crop<span className={style.logoTextStylesP2}>Wizard</span>
      </span>
    </>
  );
};
