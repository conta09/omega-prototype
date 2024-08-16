// models/session.js
import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    expires: { type: Date, required: true }
});

export default mongoose.models.Session || mongoose.model('Session', sessionSchema);
