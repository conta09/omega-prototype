"use client"
import React, { useEffect, useState } from 'react';

const Withdraws = () => {
  const [withdrawRequests, setWithdrawRequests] = useState([]);

  useEffect(() => {
    const fetchWithdrawRequests = async () => {
      const response = await fetch('/api/withdrawRequest');
      const data = await response.json();
      setWithdrawRequests(data);
    };

    fetchWithdrawRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4 text-black">Withdraw Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-black bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Amount (RWF)</th>
              <th className="px-4 py-2 text-left">Amount (USDT)</th>
              <th className="px-4 py-2 text-left">Crypto Address</th>
              <th className="px-4 py-2 text-left">Requested At</th>
            </tr>
          </thead>
          <tbody>
            {withdrawRequests.map((request) => (
              <tr key={request._id}>
                <td className="border px-4 py-2">{request.email}</td>
                <td className="border px-4 py-2">{request.amountFRW || '-'}</td>
                <td className="border px-4 py-2">{request.amountUSDT || '-'}</td>
                <td className="border px-4 py-2">{request.cryptoAddress || '-'}</td>
                <td className="border px-4 py-2">{new Date(request.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdraws;
