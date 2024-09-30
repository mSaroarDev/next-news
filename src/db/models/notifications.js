import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    notification_on: {
      type: String,
      required: false,
    },
    created_by: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const notificationModel =
  mongoose.models.Notification ||
  mongoose.model("Notification", notificationSchema);
export default notificationModel;
