import { FC } from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

import { useAuthStore } from "@/lib/store";
import { Logo } from "@/components/Logo/Logo";
import { githubProfileLink } from "@/public/links";
import { Navigation } from "@/components/Navigation/Navigation";
import { UserAvatar } from "@/components/UserAvatar/UserAvatar";

import style from "../Layout/Layout.module.css";

export const Header: FC = () => {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.data.isLoggedIn);

  return (
    <header className={style.headerContainer}>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href={githubProfileLink} target="_blank">
          <Logo />
        </Navbar.Brand>
        {isLoggedIn && <UserAvatar />}
        {!isLoggedIn && <Navbar.Toggle />}
        <Navigation router={router} />
      </Navbar>
    </header>
  );
};
