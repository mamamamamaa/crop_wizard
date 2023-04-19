import { FC, ReactNode } from "react";
import { Header } from "@/components/Header/Header";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/*<Footer />*/}
    </>
  );
};
