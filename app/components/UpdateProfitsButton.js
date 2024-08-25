"use client"
import { useState } from 'react';

function UpdateProfitsButton() {
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleFetchUserData = async () => {
    const response = await fetch(`/api/getUserByEmail?email=${userEmail}`);
    const data = await response.json();

    if (response.ok) {
      setUserData(data.user);
      setMessage('');
    } else {
      setUserData(null);
      setMessage(`Error: ${data.error}`);
    }
  };

  const handleUpdateProfits = async () => {
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }

    const response = await fetch('/api/updateProfits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userData.email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Profits updated successfully');
      setUserData({ ...userData, ...data.user }); // Update the displayed data
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium py-4">Enter user email</p>
          <label className="block text-sm font-medium">User Email:</label>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className="mt-1 block w-2/3 border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            type="button"
            onClick={handleFetchUserData}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2"
          >
            Display User
          </button>
        </div>
      </div>

      {userData && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.phoneNumber}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Crypto Balance:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.cryptoBalance}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Available Balance:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.availableBalance}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Crypto Profit:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.cryptoProfit}</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Amount Profit:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">{userData.amountProfit}</p>
          </div>
        </div>
      )}

      {userData && (
        <button
          type="button"
          onClick={handleUpdateProfits}
          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Profits
        </button>
      )}

      {message && <p className="mt-2 text-sm text-[#39da74]">{message}</p>}
    </div>
  );
}

export default UpdateProfitsButton;
