"use client"
import React, { useState } from 'react';

const WalletSelection = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequestPayment = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency, userId: 'user123' }), // Replace with actual user ID
      });

      const data = await res.json();
      if (data.hostedUrl) {
        window.location.href = data.hostedUrl; // Redirect to Coinbase Commerce checkout page
      } else {
        setError('Error creating charge: ' + data.error);
      }
    } catch (error) {
      setError('An unexpected error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>Request Payment</h1>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          className='text-black'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="currency">Currency</label>
        <select
          className='text-black'
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        >
          <option value="USD">USD</option>
          <option value="BTC">BTC</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <button
        onClick={handleRequestPayment}
        disabled={loading}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Processing...' : 'Request Payment'}
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
    <a href="https://commerce.coinbase.com/checkout/[fillintheblank]">
  <span>Pay with crypto</span>
</a>
    </>

  );
};

export default WalletSelection;
