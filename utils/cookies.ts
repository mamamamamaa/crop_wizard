import Cookies from "js-cookie";
import { TOKEN } from "@/utils/consts";

export const removeCookies = (...args: string[]) =>
  args.forEach((key) => Cookies.remove(key));

export const setCookies = (data: object) =>
  Object.entries(data).forEach(([key, value]) =>
    key === TOKEN
      ? Cookies.set(key, value)
      : Cookies.set(key, JSON.stringify(value))
  );
