import { connectDB } from "@/db/connectDB";
import categoryModel from "@/db/models/category";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await connectDB();

    const data = await categoryModel.find().sort({ _id: -1 });
    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/category/create", error);
    return NextResponse.json({ msg: "error", error });
  }
}
