import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { userId, newProfit } = await req.json();

    await connectMongoDB();

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Add the new profit to the existing referral profit
    user.referralProfit += newProfit;
    await user.save();

    return new Response(JSON.stringify({ message: "Referral profit updated successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating referral profit:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
