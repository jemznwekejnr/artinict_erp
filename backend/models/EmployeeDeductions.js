import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const employeeDeductionSchema = new Schema(
  {
    period: { type: String, required: ["Month and Year is required"] },
    staff_id: { type: String, required: ["Staff ID field is required"] },
    name: { type: String, required: ["Name field is required"] },
    amount: { type: Number, required: ["Amount field is required"] },
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("EmployeeDeduction", employeeDeductionSchema);