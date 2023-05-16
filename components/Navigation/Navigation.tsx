import { FC } from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { NextRouter } from "next/router";

import style from "./Navigaion.module.css";
import { useAuthStore } from "@/lib/auth/store";

interface Props {
  router: NextRouter;
}

export const Navigation: FC<Props> = ({ router }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const navLinks = [
    { linkTo: "/", title: "Home", visible: true },
    { linkTo: "/crop", title: "Crop", visible: isLoggedIn },
    { linkTo: "/login", title: "Sign In", visible: !isLoggedIn },
  ];

  return (
    <Navbar.Collapse>
      {navLinks.map(
        ({ linkTo, title, visible }) =>
          visible && (
            <Link
              href={linkTo}
              key={title}
              className={
                router.pathname === linkTo ? style.active : style.inactive
              }
            >
              {title}
            </Link>
          )
      )}
    </Navbar.Collapse>
  );
};
