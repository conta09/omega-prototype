// models/withdraws.js
import mongoose from 'mongoose';

const withdrawsSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phoneNumber: { type: String },
    amountRWF: { type: Number },
    cryptoAddress: { type: String },
    amountUSDT: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Withdraws || mongoose.model('Withdraws', withdrawsSchema);
