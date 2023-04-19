import { FC } from "react";
import { Button, Navbar, Dropdown, Avatar } from "flowbite-react";
import { useRouter } from "next/router";
import style from "../Layout/Layout.module.css";
import { Logo } from "@/components/Logo/Logo";

const navLinks = [
  { linkTo: "/", title: "Home" },
  { linkTo: "/crop", title: "Crop" },
  { linkTo: "/login", title: "Sign In" },
];

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header className={style.layoutContainer}>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand
          href="https://github.com/mamamamamaa/crop_wizard"
          target="_blank"
        >
          <Logo />
        </Navbar.Brand>
        <div className="flex md:order-2 gap-1">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
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
