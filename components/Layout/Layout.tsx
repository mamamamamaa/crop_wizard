import { FC, ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import style from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};
