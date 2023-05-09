import Cookies from "js-cookie";
import { expirationTime } from "@/utils/expirationTime";

export const removeCookies = (...args: string[]) =>
  args.forEach((key) => Cookies.remove(key));

export const setCookies = (data: object) =>
  Object.entries(data).forEach(([key, value]) => {
    const data = typeof value === "string" ? value : JSON.stringify(value);
    Cookies.set(key, data, {
      expires: expirationTime(),
    });
  });
