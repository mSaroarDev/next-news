import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["User", "SuperAdmin", "Developer"],
      default: "User",
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Blocked"],
      default: "Active",
    },
    member_access_status: {
      type: String,
      enum: ["Active", "Banned", "Warned"],
      default: "Active",
      required: true,
    },
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Posts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
