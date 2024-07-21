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

export async function DELETE(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();

    // Delete user with the specified email
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Email deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete email' }, { status: 500 });
  }
}
