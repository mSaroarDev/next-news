import mongoose from "mongoose";
import userModel from "./user";
import categoryModel from "./category";

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
    seo: {
      type: String,
    },
    isFeatured: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Hidden", "Archived"],
      default: "Active",
    },
    created_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postsModel = mongoose.models.Post || mongoose.model("Post", postsSchema);
export default postsModel;
