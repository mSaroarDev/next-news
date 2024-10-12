import { connectDB } from "@/db/connectDB";
import commentsModel from "@/db/models/comments";
import postsModel from "@/db/models/posts";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const formData = await req.json();

  try {
    await connectDB();

    const newData = new commentsModel({
      ...formData,
    });
    const data = await newData.save();
    const createdData = await commentsModel
      .findOne({ _id: data?._id })
      .populate("post");

    // store this comment to target post
    await postsModel.findByIdAndUpdate(
      {
        _id: formData.post,
      },
      {
        $push: {
          comments: data,
        },
      }
    );

    return NextResponse.json({ msg: "success", createdData }, { status: 200 });
  } catch (error) {
    console.log("error in api/comment/create", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
