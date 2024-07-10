// app/api/login/route.js

import { NextResponse } from 'next/server';
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Password is correct, handle successful login
    // You can generate a JWT or handle session management here

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.log('Error during login:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
