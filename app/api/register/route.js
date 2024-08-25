import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid"; // Import nanoid to generate unique codes

export async function POST(req) {
  try {
    const { name, phoneNumber, email, password } = await req.json();
    await connectMongoDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique referral code for every new user
    const uniqueReferralCode = nanoid(10); // 10-character unique code

    await User.create({
      name,
      phoneNumber,
      email,
      password: hashedPassword,
      referralCode: uniqueReferralCode, // Save the unique code to the database
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
