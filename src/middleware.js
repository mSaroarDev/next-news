import { NextResponse } from "next/server";
import { CheckCookieAuth } from "./libs/MiddlewareUtils";

// Middleware
export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }

  let token = req.cookies.get("token");
  if (token && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard/overview", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};
