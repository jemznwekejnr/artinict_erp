import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const PaymentVoucherSchema = new Schema(
  {
    memoId: { type: String, required: ["Initiator field is compulsory"] },
    preparedBy: { type: String, required: ["Initiator field is compulsory"] },
    subject: { type: String, required: ["Subject field is compulsory"] },
    beneficiaryAccountNumber: { type: String, required: ["Memo title field is required"] },
    beneficiaryAccountName: { type: String, required: ["Memo title field is required"] },
    beneficiaryBank: { type: String, required: ["First name field is required"] },
    
  },
  { timestamps: true }
 
);

export default new mongoose.model("PaymentVoucher", PaymentVoucherSchema);
