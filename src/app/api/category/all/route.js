import { connectDB } from "@/db/connectDB";
import categoryModel from "@/db/models/category";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, res) {
  try {
    await connectDB();

    const data = await categoryModel.find();
    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in api/category/create", error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
