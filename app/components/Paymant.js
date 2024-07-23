'use client';
import { useState } from 'react';


const Paymant = () => {
    const [amount, setAmount] = useState('');
    const [chargeUrl, setChargeUrl] = useState(null);
  
    const handlePayment = async () => {
      const userId = 'user-identifier'; // replace with actual user ID
      const response = await fetch('/api/createCharge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, userId }),
      });
  
      const { charge } = await response.json();
      setChargeUrl(charge.hosted_url);
    };
  
    return (
      <div>
        <h1>Make a Payment</h1>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className=' text-black'

        />
        <button onClick={handlePayment}>Pay with Coinbase</button>
        {chargeUrl && (
          <p>
            <a href={chargeUrl} target="_blank" rel="noopener noreferrer">
              Complete your payment
            </a>
          </p>
        )}
      </div>
    );
  }
export default Paymant
