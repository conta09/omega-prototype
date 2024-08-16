// /app/api/withdrawRequest/route.js
import Payment from '@/models/Payment';
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(req, res) {
  await connectMongoDB(); // Connect to the database

  try {
    const { email, amountFRW, amountUSDT, cryptoAddress } = await req.json();

    // Determine the currency based on the method used
    const currency = amountFRW ? 'FRW' : 'USDT';
    const amount = currency === 'FRW' ? amountFRW : amountUSDT;

    const newPayment = new Payment({
      email,
      amountFRW: currency === 'FRW' ? amountFRW : undefined,
      amountUSDT: currency === 'USDT' ? amountUSDT : undefined,
      cryptoAddress,
      currency,
    });

    await newPayment.save();

    return res.status(200).json({ message: 'Withdraw request saved successfully.' });
  } catch (error) {
    console.error('Error saving withdraw request:', error);
    return res.status(500).json({ message: 'Failed to save withdraw request.', error });
  }
}
