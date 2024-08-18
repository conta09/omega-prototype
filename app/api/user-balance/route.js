// pages/api/user-balance.js
import { getSession } from 'next-auth/react';
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await connectMongoDB ();

  try {
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { availableBalance, cryptoBalance } = user;

    // Log the balances to the terminal
    console.log(`Momo Balance: ${availableBalance}, Crypto Balance: ${cryptoBalance}`);

    res.status(200).json({ availableBalance, cryptoBalance });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error', error });
  }
}
