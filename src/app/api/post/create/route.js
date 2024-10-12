import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const formData = await req.json();
  const { tags } = formData;
  const toString = tags?.join(" ");

  try {
    await connectDB();

    const newData = new postsModel({
      ...formData,
      seo: `${formData.title} ${toString}`,
    });
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in api/posts/create", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
