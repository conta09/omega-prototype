// /app/api/createCharge/route.js
import { NextResponse } from 'next/server';
import CoinbaseCommerce from 'coinbase-commerce-node';

const { Client, resources } = CoinbaseCommerce;
const { Charge } = resources;

Client.init(process.env.COINBASE_COMMERCE_API_KEY);

export async function POST(request) {
  try {
    const { amount, currency, userId } = await request.json();

    // Ensure amount is a positive number
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const chargeData = {
      name: 'Example Charge',
      description: 'Payment for services',
      local_price: {
        amount: amount.toFixed(2), // Format amount as a string with 2 decimal places
        currency,
      },
      pricing_type: 'fixed_price',
      metadata: {
        userId,
      },
    };

    const charge = await Charge.create(chargeData);

    return NextResponse.json(charge);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create charge', details: error.message }, { status: 500 });
  }
}
