// app/api/user/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();

    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ email: user.email, name: user.name }, { status: 200 });
  } catch (error) {
    console.log("Error fetching user: ", error);
    return NextResponse.json({ message: "An error occurred while fetching the user." }, { status: 500 });
  }
}
