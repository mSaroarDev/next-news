import notificationModel from "@/db/models/notifications";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const data = await notificationModel.find().sort({ _id: -1 }).limit(20);

    return NextResponse.json({ msg: "success", data });
  } catch (error) {
    console.log("error in api/notifications/all", error);
    return NextResponse.json({ msg: "success", data });
  }
}
