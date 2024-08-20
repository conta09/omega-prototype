import { NextResponse } from 'next/server';
import Withdraws from '@/models/withdraws'; // Ensure the correct path
import { connectMongoDB } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectMongoDB(); // Ensure database connection

    // Fetch all withdrawal requests
    const withdrawRequests = await Withdraws.find().sort({ createdAt: -1 }); // Sorted by most recent

    // Return the withdrawal requests as JSON
    return NextResponse.json(withdrawRequests, { status: 200 });

  } catch (error) {
    console.error('Error fetching withdrawal requests:', error);
    return NextResponse.json({ message: 'Failed to fetch withdrawal requests' }, { status: 500 });
  }
}
