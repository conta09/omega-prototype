"use client";
import { useState } from 'react';
import axios from 'axios';

const PaymentPage = ({ currency1, currency2, buyerEmail }) => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('/api/crypto', {
        amount,
        currency1,
        currency2,
        buyerEmail,
      });
      setTransaction(res.data);
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        min="0.01"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to pay"
        className="mb-4 p-2 mt-3 text-[0.9rem] text-white border bg-transparent rounded-md focus:outline-none focus:ring focus:border-[#e5e7ea]"
      />
      <button
        className='flex hover:bg-white hover:text-black border-white border-[1px] font-medium py-3 px-5 rounded-lg'
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay with Crypto'}
      </button>
      {transaction && (
        <div className='text-[#575656]'>
          <h2>Transaction Created</h2>
          <p>Payment Address: <span className="font-mono text-white">{transaction.result.address || '0x587E410DFAB4b482537A1169442287Dc0462F502'}</span></p>
          <p >Amount to Pay: <span className='text-white'>{amount}</span></p>
          <p>Status URL: <a href={transaction.result.status_url} target="_blank" rel="noopener noreferrer">Check Status</a></p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PaymentPage;
