import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.json();

  try {
    const newData = new postsModel({
      ...formData,
      seo: `${formData.title} ${formData.description} ${formData.tags}`,
    });
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/posts/create", error);
    return NextResponse.json({ msg: "success", error });
  }
}
