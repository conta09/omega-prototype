import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

// Function to generate a referral code from an email
const generateReferralCode = (email) => {
  return btoa(email).substring(0, 10); // Simple Base64 encoding, first 10 characters
};

export async function GET() {
  try {
    await connectMongoDB();

    // Fetch all user emails from the database
    const users = await User.find({}, 'email name'); // Assuming users have a 'name' field
    const referrals = users.map(user => ({
      email: user.email,
      name: user.name,
      referralCode: generateReferralCode(user.email),
    }));

    return NextResponse.json({ referrals });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch referrals' }, { status: 500 });
  }
}
