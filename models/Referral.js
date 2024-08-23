import mongoose from 'mongoose';

const ReferralSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  referralCode: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Referral || mongoose.model('Referral', ReferralSchema);
