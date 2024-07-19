import { createTransaction } from '../../../services/coinPayments';

export async function POST(req) {
  try {
    const { amount, currency1, currency2, buyerEmail } = await req.json();
    const result = await createTransaction(amount, currency1, currency2, buyerEmail);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating transaction' }), { status: 500 });
  }
}
