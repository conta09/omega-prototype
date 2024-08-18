import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { userId, newBalance } = await req.json();

    await connectMongoDB();

    const user = await User.findById(userId);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Add the new balance to the existing available balance
    user.availableBalance += newBalance;
    await user.save();

    return new Response(JSON.stringify({ message: "Balance updated successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating balance:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
