import { NextResponse } from 'next/server';
import CoinbaseCommerce from 'coinbase-commerce-node';
import { connectMongoDB } from '@/lib/mongodb';
import Payment from '@/models/Payment';

const { Webhook } = CoinbaseCommerce;

const webhookSecret = process.env.WEBHOOK_SECRET;

// No need for the deprecated `export const config`

export const runtime = 'nodejs'; // Update the runtime if necessary

export async function POST(request) {
  const sigHeader = request.headers.get('X-CC-Webhook-Signature');
  const rawBody = await request.text();

  let event;
  try {
    event = Webhook.verifyEventBody(rawBody, sigHeader, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  try {
    await connectMongoDB();

    if (event.type === 'charge:confirmed') {
      const { id, metadata, pricing } = event.data;
      const amount = pricing.local.amount;
      const currency = pricing.local.currency;

      await Payment.updateOne(
        { chargeId: id },
        {
          chargeId: id,
          userId: metadata.userId,
          amount: amount,
          currency: currency,
          status: 'confirmed',
          confirmedAt: new Date(),
        },
        { upsert: true }
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Failed to process webhook:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}
