import { FC } from "react";
import Link from "next/link";
import { Button } from "flowbite-react";
import { AuthCardProps } from "@/types";

import style from "./AuthForm.module.css";
import { FormInput } from "@/components/FormInput/FormInput";

export const AuthForm: FC<AuthCardProps> = ({
  register,
  handleSubmit,
  pathToReturn,
  inputData,
  subtext,
  onSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <section>
        <p className={style.newUser}>
          {subtext.part1}{" "}
          <Link href={pathToReturn} className={style.registerLink}>
            {subtext.part2}
          </Link>
        </p>
        <div className={style.inputGroup}>
          {inputData.map((data, idx) => (
            <div key={idx}>
              <FormInput data={data} register={register} />
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </div>
      </section>
    </form>
  );
};
