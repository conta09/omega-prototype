import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import Payment from '@/models/Payment';

export async function GET() {
  try {
    await connectMongoDB();
    const transactions = await Payment.find({});
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
  }
}
