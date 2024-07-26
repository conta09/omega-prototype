"use client"
import { useState } from 'react';

function UpdateBalanceForm() {
  const [userId, setUserId] = useState('');
  const [newBalance, setNewBalance] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/updateBalance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, newBalance: parseFloat(newBalance) }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Balance updated successfully');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium ">User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium ">Add to Balance:</label>
        <input
          type="number"
          value={newBalance}
          onChange={(e) => setNewBalance(e.target.value)}
          required
          className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Update Balance
      </button>
      {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
    </form>
  );
}

export default UpdateBalanceForm;
