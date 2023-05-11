import { FC } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

import style from "./UserAvatar.module.css";
import { useAuthStore } from "@/lib/authStore";
import { PLACEHOLDER_IMAGE } from "@/public/consts";

export const UserAvatar: FC = () => {
  const { username, email, logout, avatarUrl } = useAuthStore((state) => state);

  return (
    <div className={style.avatarContainer}>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar
            alt="User settings"
            img={avatarUrl || PLACEHOLDER_IMAGE}
            rounded={true}
          />
        }
      >
        <Dropdown.Header>
          <span className={style.nameBox}>{username}</span>
          <span className={style.emailBox}>{email}</span>
        </Dropdown.Header>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
};
