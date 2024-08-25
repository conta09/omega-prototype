import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

const PROFIT_PERCENTAGE = 2.5 / 100;

async function calculateAndUpdateProfits(email) {
  try {
    await connectMongoDB();

    // Fetch the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, error: 'User not found' };
    }

    // Calculate the new profits
    const newCryptoProfit = user.cryptoProfit + user.cryptoBalance * PROFIT_PERCENTAGE;
    const newAmountProfit = user.amountProfit + user.availableBalance * PROFIT_PERCENTAGE;

    // Update the user document
    user.cryptoProfit = newCryptoProfit;
    user.amountProfit = newAmountProfit;
    await user.save();

    return { success: true };
  } catch (error) {
    console.error('Failed to update profits:', error);
    return { success: false, error: 'Failed to update profits' };
  }
}

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const result = await calculateAndUpdateProfits(email);

  if (result.success) {
    return NextResponse.json({ message: 'Profits updated successfully' }, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
