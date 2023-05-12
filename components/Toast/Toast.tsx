import { FC } from "react";
import { Toast as ToastCard } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

import style from "./Toast.module.css";

interface Props {
  message: string;
  type: "success" | "error" | "warning";
}

export const Toast: FC<Props> = ({ message = "Warning", type = "warning" }) => {
  let Icon = null;

  switch (type) {
    case "success":
      Icon = HiCheck;
      break;
    case "error":
      Icon = HiX;
      break;
    case "warning":
      Icon = HiExclamation;
      break;
  }

  return (
    <>
      <ToastCard className={style.card}>
        <div className={style.iconSuccessWrapper}>
          <HiCheck className={style.icon} />
        </div>
        <div className={style.message}>{message}</div>
      </ToastCard>
    </>
  );
};
