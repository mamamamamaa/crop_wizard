import { FC } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

import { useStore } from "@/lib/store";
import { Logo } from "@/components/Logo/Logo";
import { UserAvatar } from "@/components/UserAvatar/UserAvatar";

import layoutStyle from "../Layout/Layout.module.css";
import headerStyle from "./Header.module.css";

const navLinks = [
  { linkTo: "/", title: "Home" },
  { linkTo: "/crop", title: "Crop" },
  { linkTo: "/login", title: "Sign In" },
];

export const Header: FC = () => {
  const router = useRouter();
  const { isLoggedIn } = useStore((state) => state);

  return (
    <header className={layoutStyle.layoutContainer}>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          href="https://github.com/mamamamamaa/crop_wizard"
          target="_blank"
        >
          <Logo />
        </Navbar.Brand>
        {isLoggedIn && <UserAvatar />}
        {!isLoggedIn && <Navbar.Toggle />}
        {/*<Navbar.Collapse>*/}
        {/*  {navLinks.map(({ linkTo, title }) => (*/}
        {/*    <Navbar.Link*/}
        {/*      href={linkTo}*/}
        {/*      key={title}*/}
        {/*      active={router.pathname === linkTo}*/}
        {/*    >*/}
        {/*      {title}*/}
        {/*    </Navbar.Link>*/}
        {/*  ))}*/}
        {/*</Navbar.Collapse>*/}
        <Navbar.Collapse>
          {navLinks.map(({ linkTo, title }) => (
            <Link
              href={linkTo}
              key={title}
              className={
                router.pathname === linkTo
                  ? headerStyle.active
                  : headerStyle.inactive
              }
            >
              {title}
            </Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
