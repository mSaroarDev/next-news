import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.json();
  const { tags } = formData;
  const toString = tags?.join(" ");
  console.log("toString", toString);
  console.log("tags", tags);

  try {
    await connectDB();

    const newData = new postsModel({
      ...formData,
      seo: `${formData.title} ${formData.description} ${toString}`,
    });
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/posts/create", error);
    return NextResponse.json({ msg: "error", error });
  }
}
