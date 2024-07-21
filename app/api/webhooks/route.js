// pages/api/webhooks/route.js
import { connectMongoDB } from '../../../lib/mongodb';
import Transaction from '../../../models/Transaction';

export default async function handler(req, res) {
  await connectMongoDB();

  if (req.method === 'POST') {
    try {
      const { txn_id, status, amount, currency1, email } = req.body;

      if (status >= 100 || status === 2) {
        // Payment is complete
        const newTransaction = new Transaction({
          txn_id,
          status,
          amount,
          currency: currency1,
          email,
        });

        await newTransaction.save();

        console.log('Payment received:', txn_id);
      }

      res.status(200).json({ message: 'Webhook received' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).json({ error: 'Error processing webhook' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
