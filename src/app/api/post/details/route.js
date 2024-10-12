import { connectDB } from "@/db/connectDB";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";
import categoryModel from "@/db/models/category";
import commentsModel from "@/db/models/comments";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  //   get the id
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectDB();

    const data = await postsModel
      .findOne({ _id: id })
      .populate([{ path: "category" }, { path: "comments" }]);

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/posts/details", error);
    return NextResponse.json({ msg: "error", error });
  }
}
