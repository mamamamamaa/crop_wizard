import { FC } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { NextRouter } from "next/router";

import style from "./Navigaion.module.css";

const navLinks = [
  { linkTo: "/", title: "Home" },
  { linkTo: "/crop", title: "Crop" },
  { linkTo: "/login", title: "Sign In" },
];

interface Props {
  router: NextRouter;
}

export const Navigation: FC<Props> = ({ router }) => {
  return (
    <Navbar.Collapse>
      {navLinks.map(({ linkTo, title }) => (
        <Link
          href={linkTo}
          key={title}
          className={router.pathname === linkTo ? style.active : style.inactive}
        >
          {title}
        </Link>
      ))}
    </Navbar.Collapse>
  );
};
