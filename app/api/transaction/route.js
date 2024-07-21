// pages/api/transactions.js
import { connectMongoDB } from '@/lib/mongodb';
import Transaction from '@/models/Transaction';

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'GET') {
    try {
      const transactions = await Transaction.find({}).lean();
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
