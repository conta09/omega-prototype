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

    // Fetch user details based on email
    const user = await User.findOne(
      { email },
      'name phoneNumber email cryptoBalance availableBalance cryptoProfit amountProfit'
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Convert Decimal128 to string
    const userData = {
      ...user.toObject(),
      cryptoProfit: user.cryptoProfit.toString(),
      amountProfit: user.amountProfit.toString(),
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
