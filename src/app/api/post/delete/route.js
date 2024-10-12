import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req, res) {
  //   get the id
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectDB();

    const data = await postsModel.findByIdAndDelete({ _id: id });

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/posts/delete", error);
    return NextResponse.json({ msg: "error", error });
  }
}
