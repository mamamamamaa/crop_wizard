import { FC, ReactNode } from "react"
import style from "./AuthLayout.module.css"

interface Props {
  children: ReactNode
}

export const AuthLayout: FC<Props> = ({ children }) => {
  return <main className={style.mainCower}>{children}</main>
}
