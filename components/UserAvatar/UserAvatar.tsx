import { FC } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

import style from "./UserAvatar.module.css";
import { useAuthStore } from "@/lib/authStore";

export const UserAvatar: FC = () => {
  const { username, email, logout } = useAuthStore((state) => state);
  return (
    <div className={style.avatarContainer}>
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
