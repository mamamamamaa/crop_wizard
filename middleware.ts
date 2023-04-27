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
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    cookiesData.forEach(({ key, data }) =>
      result.cookies.set(key, data, {
        expires: expirationTime,
      })
    );

    return result;
  }

  return NextResponse.next();
}
