// app/api/emails/route.js

import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function GET() {
  try {
    await connectMongoDB();

    // Fetch all user emails from the database
    const users = await User.find({}, 'email');
    const emails = users.map(user => user.email);

    return NextResponse.json({ emails });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch emails' }, { status: 500 });
  }
}
