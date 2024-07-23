'use client'; // this directive is necessary if you're using the App Router

import { useState } from 'react';

export default function CreateCharge() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [userId, setUserId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/createCharge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: parseFloat(amount), currency, userId }),
    });

    const data = await response.json();
    if (response.ok) {
      setResponseMessage(`Charge created successfully: ${JSON.stringify(data)}`);
      // Redirect user to hosted_url to complete payment
      window.location.href = data.hosted_url;
    } else {
      setResponseMessage(`Error creating charge: ${data.error}`);
    }
  };

  return (
    <div className="max-w-md  bg-gray-800 p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-center text-white mb-6">Create Charge</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-1 block w-full p-2 bg-gray-700 text-white rounded-md border-gray-600"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-300">
            Currency:
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              className="mt-1 block w-full p-2 bg-gray-700 text-white rounded-md border-gray-600"
            />
          </label>
        </div>
        <div>
          <label className="block text-gray-300">
            User email:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="mt-1 block w-full p-2 bg-gray-700 text-white rounded-md border-gray-600"
            />
          </label>
        </div>
        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
          Create Charge
        </button>
      </form>
      {responseMessage && (
        <div className="mt-6 p-4 bg-red-600 text-white rounded-md break-words">
          {responseMessage}
        </div>
      )}
    </div>
  );
}
