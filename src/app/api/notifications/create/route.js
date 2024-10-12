import { connectDB } from "@/db/connectDB";
import notificationModel from "@/db/models/notifications";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req, res) {
  const formData = await req.json();
  const { type, created_by, notification_on, text } = formData;

  try {
    await connectDB();

    const newData = new notificationModel({
      type,
      created_by,
      notification_on,
      text,
    });

    const data = await newData.save();

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error in api/notifications/create", error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
