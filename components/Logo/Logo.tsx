import { FC } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import style from "./Logo.module.css";

interface Props {
  color?: string;
  size?: number;
}

export const Logo: FC<Props> = ({ color = "text-gray-700", size = 32 }) => {
  return (
    <>
      <Image src={logo} alt="cropp wizard logo" loading="lazy" width={size} />
      <span
        className={`${style.logoTextStylesP1} ${color} ${
          size !== 32 ? style.textLarge : ""
        }`}
      >
        Crop<span className={style.logoTextStylesP2}>Wizard</span>
      </span>
    </>
  );
};
