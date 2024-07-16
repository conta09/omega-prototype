// pages/api/admin/users.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    try {
      const users = await User.find({}, 'email'); // Fetch only the email field
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
