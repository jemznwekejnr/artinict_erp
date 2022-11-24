import mongoose from "mongoose";
import 'mongoose-type-email';
const { Schema } = mongoose;

const PaymentVoucherSheetSchema = new Schema(
  {
    paymentVoucherId: { type: String, required: ["Voucher ID is compulsory"] },
    class: { type: String, required: ["Payment class is compulsory"] },
    description: { type: String, required: ["Description field is compulsory"] },
    qty: { type: Number, required: ["Quantity field is compulsory"] },
    unitPrice: { type: Number, required: ["Unit price is compulsory"] },
    amount: { type: Number },
    vat: { type: Number },
    vatAmount: { type: Number },
    grossAmount: { type: Number },
    whtRate: { type: Number },
    whtAmount: { type: Number },
    netAmount: { type: Number },

  },

  { timestamps: true }
 
);

export default new mongoose.model("PaymentVoucherSheet", PaymentVoucherSheetSchema);
