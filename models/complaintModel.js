import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    collectionName: {
      type: String,
      required: true,
    },
    outfitName: {
      type: String,
      required: true,
    },
    complaintDetails: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Complaint", complaintSchema);

export default Category;
