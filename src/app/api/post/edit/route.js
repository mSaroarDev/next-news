import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req, res) {
  const formData = await req.json();
  const { tags } = formData;
  const toString = tags?.join(" ");

  //   get the id
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectDB();

    const data = await postsModel.findByIdAndUpdate(
      { _id: id },
      {
        ...formData,
        seo: `${formData.title} ${formData.description} ${toString}`,
      },
      {
        new: true,
      }
    );

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/posts/edit", error);
    return NextResponse.json({ msg: "error", error });
  }
}
