import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const memoSchema = new Schema(
  {
    memoDate: { type: Date, required: ["Memo Date field is required"] },
    refId: { type: String, required: ["Memo Date field is required"] },
    memoTitle: { type: String, required: ["Memo title field is required"] },
    memoBody: { type: String, required: ["Memo title field is required"] },
    ownerId: { type: String, required: ["First name field is required"] },
    attachment: { type: String, required: ["Home Address field is required"] },
    attachemntType: { type: String, required: ["Gender number field is required"] },
    memoType: { type: String, required: ["Phone number field is required"] },
    completion: { type: Number },

    correspondents: [{ label: String }],
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Memo", memoSchema);
