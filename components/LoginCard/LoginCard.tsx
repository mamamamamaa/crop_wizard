import { FC } from "react";
import style from "./LoginCard.module.css";

export const LoginCard: FC = () => {
  return (
    <>
      <section className={style.sectionWrapper}>
        <div className={style.cardWrapper}>
          <h2 className="text-6xl">Вхід</h2>
        </div>
      </section>
    </>
  );
};
