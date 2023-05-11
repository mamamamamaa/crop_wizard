import { FC } from "react";
import style from "@/components/AuthCard/AuthCard.module.css";
import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";
import { AuthCardProps } from "@/components/AuthCard/AuthCard";

export const AuthForm: FC<AuthCardProps> = ({
  register,
  handleSubmit,
  header,
  pathToReturn,
  inputData,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <section>
        <p className={style.newUser}>
          New user?{" "}
          <Link href="/register" className={style.registerLink}>
            Create account
          </Link>
        </p>
        <div className={style.inputGroup}>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              placeholder="mamamamama@mama.com"
              required={true}
              {...register("email")}
            />
          </div>

          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              placeholder="qwerty123456"
              required={true}
              {...register("password")}
            />
          </div>

          <Button type="submit">Submit</Button>
        </div>
      </section>
    </form>
  );
};
