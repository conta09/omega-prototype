"use client"
import React, { useEffect, useState } from 'react';

const UserRefferals = () => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch('/api/referrals');
        const data = await response.json();
        setReferrals(data.referrals);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    };

    fetchReferrals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Referrals</h1>
      <div className="bg-[#141318] p-4 rounded shadow-lg">
        {referrals.length > 0 ? (
          <ul className="space-y-4">
            {referrals.map((referral, index) => (
              <li key={index} className="flex justify-between items-center p-2 bg-[#24222b] rounded">
                <div>
                  <p className="text-gray-200 font-medium">{referral.name}</p>
                  <p className="text-gray-400 text-sm">{referral.email}</p>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <p className="text-gray-200">{referral.referralCode}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No referrals available.</p>
        )}
      </div>
    </div>
  );
};

export default UserRefferals;
