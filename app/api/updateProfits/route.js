import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

const PROFIT_PERCENTAGE = 2.5 / 100;

async function calculateAndUpdateProfits() {
  try {
    await connectMongoDB();

    console.log('Connected to MongoDB. Starting profit calculations...');

    // Fetch all users
    const users = await User.find();

    // Loop through each user and calculate the profits
    for (let user of users) {
      // Skip users missing required fields
      if (!user.name || !user.phoneNumber) {
        console.warn(`Skipping user ${user.email}: Missing required fields.`);
        continue;
      }

      const { cryptoBalance, availableBalance, cryptoProfit, amountProfit } = user;

      // Calculate the new profits
      const newCryptoProfit = cryptoProfit + cryptoBalance * PROFIT_PERCENTAGE;
      const newAmountProfit = amountProfit + availableBalance * PROFIT_PERCENTAGE;

      // Update the user document
      user.cryptoProfit = newCryptoProfit;
      user.amountProfit = newAmountProfit;
      await user.save();

      console.log(`Updated profits for user ${user.email}: Crypto Profit = ${newCryptoProfit}, Amount Profit = ${newAmountProfit}`);
    }

    console.log('Profit calculations and updates completed successfully.');
    return { success: true };
  } catch (error) {
    console.error('Failed to update profits:', error);
    return { success: false, error: 'Failed to update profits' };
  }
}

export async function POST() {
  const result = await calculateAndUpdateProfits();

  if (result.success) {
    return NextResponse.json({ message: 'Profits updated successfully' }, { status: 200 });
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
