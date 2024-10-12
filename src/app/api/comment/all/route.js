import commentsModel from "@/db/models/comments";
import { NextResponse } from "next/server";
import postsModel from "@/db/models/posts";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  try {
    const data = postId
      ? await commentsModel.find({ post: postId }).sort({ _id: -1 })
      : await commentsModel.find().sort({ _id: -1 });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
