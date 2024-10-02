import { connectDB } from "@/db/connectDB";
import categoryModel from "@/db/models/category";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.json();

  try {
    await connectDB();

    const newData = new categoryModel(formData);
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/category/create", error);
    return NextResponse.json({ msg: "success", error });
  }
}
