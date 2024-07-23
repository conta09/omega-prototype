// /models/Payment.js
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  chargeId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, default: 'pending' },
  confirmedAt: { type: Date },
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
