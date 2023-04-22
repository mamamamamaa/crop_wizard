import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useStore } from "@/lib/store";

export function middleware(request: NextRequest) {
  // const setToken = useStore((state) => state.auth.setToken);
  const userCookie = request.cookies.get("user");
  const accessTokenCookie = request.cookies.get("accessToken");

  const token = accessTokenCookie?.value;
  console.log(token);

  return NextResponse.next();
}
