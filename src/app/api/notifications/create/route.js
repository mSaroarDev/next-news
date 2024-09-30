import notificationModel from "@/db/models/notifications";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const formData = await req.json();
  const { type, created_by, notification_on, text } = formData;

  try {
    const newData = new notificationModel({
      type,
      created_by,
      notification_on,
      text,
    });

    const data = await newData.save();

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/notifications/create", error);
    return NextResponse.json({ msg: "success", data });
  }
}
