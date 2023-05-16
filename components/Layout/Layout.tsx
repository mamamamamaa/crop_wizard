import { FC, ReactNode, useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import style from "./Layout.module.css";
import { useAuthStore } from "@/lib/auth/store";
import { Toast } from "@/components/Toast/Toast";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const { error, clearError } = useAuthStore((state) => state);

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (error) {
      id = setTimeout(() => {
        clearError();
      }, 2000);
    }

    return () => clearTimeout(id);
  }, [error]);

  return (
    <>
      {error && <Toast message={error} type={"error"} />}
      <Header />
      <main className={style.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};
