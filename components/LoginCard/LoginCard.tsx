import { FC } from "react";
import style from "./LoginCard.module.css";
import Link from "next/link";
import { Label, TextInput } from "flowbite-react";

export const LoginCard: FC = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <section className={style.cardWrapper}>
          <header>
            <h1 className="text-2xl font-bold text-gray-700">Log in</h1>
          </header>
          <section className="text-gray-500">
            <form>
              <section>
                <p>
                  New user?{" "}
                  <Link
                    href="/register"
                    className="text-blue-500 hover:underline"
                  >
                    Create account
                  </Link>
                </p>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="username3"
                      color="success"
                      value="Your name"
                    />
                  </div>
                  <TextInput
                    id="username"
                    placeholder="mamamamama@mama.com"
                    required={true}
                    color="success"
                  />
                </div>
              </section>
            </form>
          </section>
        </section>
      </div>
    </>
  );
};
