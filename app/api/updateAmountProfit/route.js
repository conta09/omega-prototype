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

    // Ensure newProfit is added correctly to the existing amount profit
    user.amountProfit = Number(user.amountProfit) + Number(newProfit);
    await user.save();

    return new Response(JSON.stringify({ message: "Amount profit updated successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating amount profit:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
