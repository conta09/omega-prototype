import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();

    // Aggregate referral codes and count occurrences
    const referralCodes = await User.aggregate([
      {
        $match: { referralCode: { $ne: null } }
      },
      {
        $group: {
          _id: "$referralCode",
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    return NextResponse.json(referralCodes);
  } catch (error) {
    console.error("Error fetching referral codes:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching referral codes." },
      { status: 500 }
    );
  }
}
