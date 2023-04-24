import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { useAuthStore } from "@/lib/authStore";

export async function middleware(req: NextRequest) {
  const accessToken = req.nextUrl.searchParams.get("accessToken");
  const user = req.nextUrl.searchParams.get("user");

  if (accessToken && user) {
    req.cookies.set("accessToken", accessToken);
    req.cookies.set("user", user);
  }

  req.nextUrl.searchParams.delete("accessToken");
  req.nextUrl.searchParams.delete("user");

  console.log(req.cookies.get("user"));

  return NextResponse.next();
}
