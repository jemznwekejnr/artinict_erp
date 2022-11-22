import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const deductionSchema = new Schema(
  {
    name: { type: String, required: ["Deduction name is required"] },
    rate: { type: Number, required: ["Deduction rate is required"] },
    description: { type: String, required: ["description field is required"] },
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Deductions", deductionSchema);
