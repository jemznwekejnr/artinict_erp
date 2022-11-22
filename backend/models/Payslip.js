import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const payslipSchema = new Schema(
  {
    period: { type: String, required: ["Month and Year is required"] },
    staff_id: { type: String, required: ["Staff ID field is required"] },
    gross_salary: { type: Number, required: ["Amount field is required"] },
    gross_reimbursment: { type: Number, required: ["Amount field is required"] },
    gross_deductions: { type: Number, required: ["Amount field is required"] },
    net_amount: { type: Number, required: ["Amount field is required"] },
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("Payslip", payslipSchema);