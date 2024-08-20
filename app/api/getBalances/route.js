// app/api/getBalances/route.js

import { connectMongoDB } from "@/lib/mongodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const { db } = await connectMongoDB();
  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(
    JSON.stringify({
      cryptoBalance: user.cryptoBalance || 0,
      availableBalance: user.availableBalance || 0,
    }),
    { status: 200 }
  );
}
