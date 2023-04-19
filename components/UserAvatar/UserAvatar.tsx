import { FC } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

import style from "./UserAvatar.module.css";

export const UserAvatar: FC = () => {
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
          <span className={style.nameBox}>Bonnie Green</span>
          <span className={style.emailBox}>name@flowbite.com</span>
        </Dropdown.Header>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
};
