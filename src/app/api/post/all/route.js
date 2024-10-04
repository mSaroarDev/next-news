import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const data = await postsModel.find().populate("category").sort({ _id: -1 });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in api/post/all", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
