// services/coinPaymentsService.js
const CoinPayments = require('coinpayments');

const client = new CoinPayments({
  key: process.env.COINPAYMENTS_API_KEY,
  secret: process.env.COINPAYMENTS_API_SECRET,
});

const createTransaction = async (amount, currency1, currency2, buyerEmail) => {
  const options = {
    currency1,
    currency2,
    amount,
    buyer_email: buyerEmail,
  };

  try {
    const result = await client.createTransaction(options);
    return result;
  } catch (error) {
    console.error('CoinPayments createTransaction error:', error);
    throw error;
  }
};

module.exports = { createTransaction };
