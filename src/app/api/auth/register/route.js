import { connectDB } from "@/db/connectDB";
import { NextResponse } from "next/server";
import userModel from "@/db/models/user";
import bcrypt from "bcrypt";

export async function POST(req, res) {
  // get values
  const formData = await req.json();
  console.log("formData", formData);

  const { email, password } = formData;

  try {
    await connectDB();

    // check existing user
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { msg: "failed", data: "exist user" },
        { status: 406 }
      );
    }

    // store value
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newData = new userModel({
      ...formData,
      password: hashedPassword,
    });
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in 'api/auth/register", error);
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
