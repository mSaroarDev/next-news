import { connectDB } from "@/db/connectDB";
import userModel from "@/db/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.json();

  try {
    await connectDB();

    const existUser = await userModel.findOne({ email: formData.email });

    if (!existUser) {
      return NextResponse.json(
        { msg: "failed", data: "user not found" },
        { status: 401 }
      );
    }

    const isValidPassword = bcrypt.compareSync(
      formData.password,
      existUser.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { msg: "failed", data: "wrong password" },
        { status: 401 }
      );
    }

    if (existUser && isValidPassword) {
      // generate token
      const token = jwt.sign(
        {
          id: existUser._id,
          name: existUser.name,
          email: existUser.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      // Create a NextResponse object
      const response = NextResponse.json(
        { msg: "success", data: "logged in" },
        { status: 200 }
      );

      // Set the cookie
      response.cookies.set("_private_key", token, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour expiration
      });

      // Return the response with the cookie
      return response;
    }
  } catch (error) {
    console.log("error in 'api/auth/login", error);
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
