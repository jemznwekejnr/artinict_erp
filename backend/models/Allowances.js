import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const allowanceSchema = new Schema(
  {
    name: { type: String, required: ["Allowance name is required"] },
    amount: { type: Number, required: ["Amount field is required"] },
    positionTreeId: { type: String, required: ["Position applied to field is required"] },
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Allowances", allowanceSchema);
