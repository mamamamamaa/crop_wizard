import { FC } from "react";
import { Button, Navbar, Dropdown, Avatar } from "flowbite-react";
import { useRouter } from "next/router";
import style from "../Layout/Layout.module.css";
import { Logo } from "@/components/Logo/Logo";
import { useStore } from "@/lib/store";
import { UserAvatar } from "@/components/UserAvatar/UserAvatar";

const navLinks = [
  { linkTo: "/", title: "Home" },
  { linkTo: "/crop", title: "Crop" },
  { linkTo: "/login", title: "Sign In" },
];

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
        <Navbar.Collapse>
          {navLinks.map(({ linkTo, title }) => (
            <Navbar.Link
              href={linkTo}
              key={title}
              active={router.pathname === linkTo}
            >
              {title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
