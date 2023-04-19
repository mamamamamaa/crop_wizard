import { FC } from "react";
import { Footer as F, Navbar } from "flowbite-react";

import style from "../Layout/Layout.module.css";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Logo } from "@/components/Logo/Logo";

export const Footer: FC = () => {
  return (
    <F container={true} className={style.layoutContainer}>
      <div className={`w-full text-center ${style.layoutContainer}`}>
        <div className="w-full flex justify-center">
          <Navbar.Brand
            href="https://github.com/mamamamamaa/crop_wizard"
            target="_blank"
          >
            <Logo />
          </Navbar.Brand>
        </div>
        <F.Divider />
        <div className="w-full sm:flex items-center justify-between">
          <F.Copyright
            href="https://github.com/mamamamamaa/crop_wizard"
            by="Crop Wizard™"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 justify-center gap-2">
            <F.Icon href="#" icon={BsFacebook} />
            <F.Icon href="#" icon={BsInstagram} />
            <F.Icon href="#" icon={BsTwitter} />
            <F.Icon href="#" icon={BsGithub} />
            <F.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </F>
  );
};
