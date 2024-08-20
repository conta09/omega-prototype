"use client"
import React, { useEffect, useState } from 'react';

const Withdraws = () => {
  const [withdraws, setWithdraws] = useState([]);

  useEffect(() => {
    const fetchWithdraws = async () => {
      try {
        const response = await fetch('/api/withdrawRequest');
        const data = await response.json();
        setWithdraws(data);
      } catch (error) {
        console.error('Error fetching withdraw requests:', error);
      }
    };

    fetchWithdraws();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-white mb-4">Withdraw Requests</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-[#141318] border-b">Email</th>
              <th className="px-4 py-2 text-left bg-[#141318] border-b">Phone Number</th>
              <th className="px-4 py-2 text-left bg-[#141318] border-b">Amount (RWF)</th>
              <th className="px-4 py-2 text-left bg-[#141318] border-b">Crypto Address</th>
              <th className="px-4 py-2 text-left bg-[#141318] border-b">Amount (USDT)</th>
              <th className="px-4 py-2 text-left  border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {withdraws.map((withdraw, index) => (
              <tr key={index} className="">
                <td className="px-4 py-2 border-b">{withdraw.email}</td>
                <td className="px-4 py-2 border-b">{withdraw.phoneNumber || '-'}</td>
                <td className="px-4 py-2 border-b">{withdraw.amountRWF || '-'}</td>
                <td className="px-4 py-2 border-b">{withdraw.cryptoAddress || '-'}</td>
                <td className="px-4 py-2 border-b">{withdraw.amountUSDT || '-'}</td>
                <td className="px-4 py-2 border-b">{new Date(withdraw.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Withdraws;
