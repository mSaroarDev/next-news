import { connectDB } from "@/db/connectDB";
import categoryModel from "@/db/models/category";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, { params }) {
  const formData = await req.json();
  const { id } = params;

  try {
    await connectDB();

    const data = await categoryModel.findByIdAndUpdate({ _id: id }, formData, {
      new: true,
    });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in api/category/edit/:id", error);
    return NextResponse.json({ msg: "success", error }, { status: 500 });
  }
}
