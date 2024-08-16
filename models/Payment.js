// /models/Payment.js
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  amountFRW: { type: Number, required: function() { return this.currency === 'FRW'; } },
  amountUSDT: { type: Number, required: function() { return this.currency === 'USDT'; } },
  cryptoAddress: { type: String },
  currency: { type: String, required: true },
  status: { type: String, default: 'pending' },
  confirmedAt: { type: Date },
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
