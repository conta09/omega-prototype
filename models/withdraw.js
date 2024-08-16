import mongoose, { Schema, models } from "mongoose";

const withdrawRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    amountInRWF: {
      type: Number,
      default: 0, // Default to 0, since not all requests might use this field
    },
    amountInCrypto: {
      type: Number,
      default: 0, // Default to 0, since not all requests might use this field
    },
    address: {
      type: String,
      default: "", // Default to an empty string, since not all requests might use this field
    },
    method: {
      type: String,
      enum: ["momo", "crypto"],
      required: true,
    },
  },
  { timestamps: true }
);

const WithdrawRequest =
  models.WithdrawRequest || mongoose.model("WithdrawRequest", withdrawRequestSchema);

export default WithdrawRequest;
