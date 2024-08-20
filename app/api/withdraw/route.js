import { NextResponse } from 'next/server';
import Withdraws from '@/models/withdraws';
import { connectMongoDB } from '@/lib/mongodb';

export async function POST(req) {
  try {
    await connectMongoDB(); // Ensure database connection

    const data = await req.json(); // Parse the JSON body

    const { email, phoneNumber, amountRWF, cryptoAddress, amountUSDT } = data;

    // Create a new withdrawal record
    const newWithdraw = new Withdraws({
      email,
      phoneNumber: phoneNumber || null,
      amountRWF: amountRWF || null,
      cryptoAddress: cryptoAddress || null,
      amountUSDT: amountUSDT || null,
    });

    // Save the record to the database
    await newWithdraw.save();

    // Return a success message
    return NextResponse.json({ message: 'Request sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error submitting withdrawal request:', error);
    return NextResponse.json({ message: 'Failed to send request' }, { status: 500 });
  }
}
