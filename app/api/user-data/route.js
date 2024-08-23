import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    await connectMongoDB();

    // Fetch user details based on email, including cryptoProfit, amountProfit, and referralProfit
    const user = await User.findOne(
      { email },
      'name phoneNumber email cryptoBalance availableBalance cryptoProfit amountProfit referralProfit'
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      cryptoBalance: user.cryptoBalance,
      availableBalance: user.availableBalance,
      cryptoProfit: user.cryptoProfit.toString(),  // Convert Decimal128 to string
      amountProfit: user.amountProfit.toString(),  // Convert Decimal128 to string
      referralProfit: user.referralProfit.toString(), // Convert Decimal128 to string
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
