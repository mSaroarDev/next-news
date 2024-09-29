import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/user";
import { SetCookie } from "@/libs/SetCookie";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  try {
    await connectDB();
    const formData = await req.json();
    const { email, password } = formData;

    const isUser = await userModel.findOne({ email });

    if (!isUser) {
      return NextResponse.json(
        { msg: "failed", data: "no user found" },
        { status: 401 }
      );
    }

    const isValidPassword = bcrypt.compareSync(password, isUser.password);
    console.log("isValidPassword", isValidPassword);
    if (!isValidPassword) {
      return NextResponse.json(
        { msg: "failed", data: "invalid credentials" },
        { status: 401 }
      );
    }

    if (isUser && isValidPassword) {
      const cookie = await SetCookie(isUser._id, isUser.name, isUser.email);
      return NextResponse.json(
        {
          msg: "success",
          data: {
            ...isUser,
            id: isUser._id,
          },
        },
        { status: 200, headers: cookie }
      );
    }
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: "somethi" });
  }
}
