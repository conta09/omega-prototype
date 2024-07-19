import axios from 'axios';
import crypto from 'crypto';

const COINPAYMENTS_API_URL = 'https://www.coinpayments.net/api.php';

const createHMAC = (params) => {
  const hmac = crypto.createHmac('sha512', process.env.COINPAYMENTS_API_SECRET);
  hmac.update(params);
  return hmac.digest('hex');
};

export const createTransaction = async (amount, currency1, currency2, buyerEmail) => {
  const params = {
    key: process.env.NEXT_PUBLIC_COINPAYMENTS_API_KEY,
    version: 1,
    cmd: 'create_transaction',
    amount,
    currency1,
    currency2,
    buyer_email: buyerEmail,
    format: 'json',
  };

  const formData = new URLSearchParams(params).toString();
  const headers = {
    'HMAC': createHMAC(formData),
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const response = await axios.post(COINPAYMENTS_API_URL, formData, { headers });
  return response.data;
};
