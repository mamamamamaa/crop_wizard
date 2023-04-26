import { NextRequest, NextResponse } from "next/server";

const allowedParams = ["accessToken", "user"];

export const config = {
  matcher: "/",
};
export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let changed = false;
  const cookiesData: { key: string; data: string }[] = [];

  url.searchParams.forEach((data, key) => {
    if (allowedParams.includes(key)) {
      cookiesData.push({ key, data });
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed && cookiesData) {
    const result = NextResponse.redirect(url);

    cookiesData.forEach(({ key, data }) => result.cookies.set(key, data));

    return result;
  }

  return NextResponse.next();
}
