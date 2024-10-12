import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  cookies().delete("token");
  return NextResponse.json({ msg: "success", data: "logout success" });
}
