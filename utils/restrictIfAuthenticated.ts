import { parseBooleanCookie } from "@/utils/cookies";
import { GetServerSidePropsContext } from "next";

export const restrictIfAuthenticated = ({ req }: GetServerSidePropsContext) => {
  const { isLoggedIn } = req.cookies;
  const parsedIsLoggedIn = parseBooleanCookie(isLoggedIn);

  if (parsedIsLoggedIn) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return false;
};
