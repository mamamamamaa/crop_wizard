import Cookies from "js-cookie";
import { expirationTime } from "@/utils/expirationTime";
import qs from "querystring";

export const removeCookies = (...args: string[]) =>
  args.forEach((key) => Cookies.remove(key));

export const getCookie = (key: string) => Cookies.get(key);

export const setCookies = (data: object) =>
  Object.entries(data).forEach(([key, value]) => {
    const data = typeof value === "string" ? value : JSON.stringify(value);
    Cookies.set(key, data, {
      expires: expirationTime(),
    });
  });

export const parseCookies = (cookies: string) => qs.decode(cookies, "; ");

export const parseBooleanCookie = (cookie: string | undefined) => {
  switch (cookie) {
    case "false":
      return false;
    case "true":
      return true;
    default:
      return Boolean(cookie);
  }
};
