import { FC, ReactNode } from "react";
import style from "./AuthLayout.module.css";

interface Props {
  children: ReactNode;
}

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <div className={style.mainCower}>{children}</div>
    </main>
  );
};
