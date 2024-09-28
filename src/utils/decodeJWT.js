import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// decode middleware
export async function DecodeToken(req) {
  try {
    const token = req.cookies.get("_private_key");

    // verify token
    const decodedToken = await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // extract data from tok
    const { id, name, email } = decodedToken["payload"];

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("id", id);
    requestHeaders.set("email", email);
    requestHeaders.set("name", name);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
