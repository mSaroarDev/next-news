import { NextResponse } from "next/server";
import { DecodeToken } from "./utils/decodeJWT";

// middleware
export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await DecodeToken(req);
  }

  const token = req.cookies.get("_private_key");
  if (token && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard/overview", req.url));
  }
}
