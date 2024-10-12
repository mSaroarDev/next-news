import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  try {
    const token = req.cookies.get("_private_key")?.value;

    if (!token) {
      return NextResponse.json({ msg: "Token missing" }, { status: 401 });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.json(
      { decodedToken },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }
}
