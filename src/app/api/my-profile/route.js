import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/user";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  if (!id) {
    return NextResponse.json(
      { msg: "error", data: "user unauthorized" },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const data = await userModel.findOne({ _id: id });

    if (!data) {
      return NextResponse.json(
        { msg: "failed", data: "user not found" },
        { status: 404 }
      );
    }

    // destacture data
    const { _id, name, designation, address, email, mobile, image } = data;

    return NextResponse.json(
      {
        msg: "success",
        data: {
          id: _id,
          name,
          designation,
          address,
          email,
          mobile,
          image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
