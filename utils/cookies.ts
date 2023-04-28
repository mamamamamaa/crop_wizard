import Cookies from "js-cookie";

export const removeCookies = (...args: string[]) =>
  args.forEach((key) => Cookies.remove(key));

export const setCookies = (data: object) =>
  Object.entries(data).forEach(([key, value]) =>
    Cookies.set(key, JSON.stringify(value))
  );
