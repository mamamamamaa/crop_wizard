import { FC } from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

import { useStore } from "@/lib/store";
import { Logo } from "@/components/Logo/Logo";
import { UserAvatar } from "@/components/UserAvatar/UserAvatar";

import style from "../Layout/Layout.module.css";
import { Navigation } from "@/components/Navigation/Navigation";

export const Header: FC = () => {
  const router = useRouter();
  const { isLoggedIn } = useStore((state) => state);

  return (
    <header className={style.layoutContainer}>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          href="https://github.com/mamamamamaa/crop_wizard"
          target="_blank"
        >
          <Logo />
        </Navbar.Brand>
        {isLoggedIn && <UserAvatar />}
        {!isLoggedIn && <Navbar.Toggle />}
        <Navigation router={router} />
      </Navbar>
    </header>
  );
};
