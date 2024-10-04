import mongoose from "mongoose";
import postsModel from "./posts";
import userModel from "./user";

const commentsSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentsModel =
  mongoose.models.Comment || mongoose.model("Comment", commentsSchema);
export default commentsModel;
