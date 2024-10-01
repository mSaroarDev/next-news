import mongoose from "mongoose";
import userModel from "./user";

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
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

const categoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default categoryModel;
