"use client";
import { useState } from 'react';

function UpdateBalanceForm() {
  const [userEmail, setUserEmail] = useState('');
  const [newBalance, setNewBalance] = useState('');
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

  const handleUpdateAvailableBalance = async (e) => {
    e.preventDefault();
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }
    const response = await fetch('/api/updateAvailableBalance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userData._id, newBalance: parseFloat(newBalance) }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Available balance updated successfully');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  const handleUpdateCryptoBalance = async (e) => {
    e.preventDefault();
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }
    const response = await fetch('/api/updateCryptoBalance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userData._id, newBalance: parseFloat(newBalance) }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Crypto balance updated successfully');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  const handleUpdateReferralProfit = async (e) => {
    e.preventDefault();
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }
    const response = await fetch('/api/updateReferralProfit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userData._id, newProfit: parseFloat(newBalance) }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Referral profit updated successfully');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  const handleUpdateCryptoProfit = async (e) => {
    e.preventDefault();
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }
    const response = await fetch('/api/updateCryptoProfit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userData._id, newProfit: parseFloat(newBalance) }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Crypto profit updated successfully');
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  const handleUpdateAmountProfit = async (e) => {
    e.preventDefault();
    if (!userData) {
      setMessage('Please fetch user data first');
      return;
    }
    const response = await fetch('/api/updateAmountProfit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userData._id, newProfit: parseFloat(newBalance) }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage('Amount profit updated successfully');
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
            Display
          </button>
        </div>
      </div>

      {userData && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.name}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.phoneNumber}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.email}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Crypto Balance:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.cryptoBalance}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Available Balance:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.availableBalance}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Crypto Profit:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.cryptoProfit}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Amount Profit:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.amountProfit}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium">Referral Profit:</label>
            <p className="mt-1 block w-2/3 border border-gray-300 rounded-md shadow-sm py-2 px-3 sm:text-sm">
              {userData.referralProfit}
            </p>
          </div>
        </div>
      )}

      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Add to Balance/Profit:</label>
          <input
            type="number"
            value={newBalance}
            onChange={(e) => setNewBalance(e.target.value)}
            required
            className="mt-1 block w-2/3 border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-5 sm:gap-3 justify-center">
  <button
    type="button"
    onClick={handleUpdateAvailableBalance}
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  >
    Update Available Balance
  </button>

  <button
    type="button"
    onClick={handleUpdateCryptoBalance}
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  >
    Update Crypto Balance
  </button>

  <button
    type="button"
    onClick={handleUpdateReferralProfit}
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  >
    Update Referral Profit
  </button>

  <button
    type="button"
    onClick={handleUpdateCryptoProfit}
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  >
    Update Crypto Profit
  </button>

  <button
    type="button"
    onClick={handleUpdateAmountProfit}
    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  >
    Update Amount Profit
  </button>
</div>

      </form>

      {message && (
        <p className="mt-4 text-sm text-[#78e16f]">{message}</p>
      )}
    </div>
  );
}

export default UpdateBalanceForm;
