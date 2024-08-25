"use client";
import React, { useEffect, useState } from "react";
import UserRefferals from "./UserRefferals";

const Referral = () => {
  const [referralCodes, setReferralCodes] = useState([]);

  useEffect(() => {
    const fetchReferralCodes = async () => {
      try {
        const response = await fetch("/api/referralCodes");
        const data = await response.json();
        setReferralCodes(data);
      } catch (error) {
        console.error("Error fetching referral codes:", error);
      }
    };

    fetchReferralCodes();
  }, []);

  return (
    <div className="p-4">
      <UserRefferals />
      <h1 className="text-2xl font-bold mb-4">Used Referrals</h1>
      {referralCodes.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referral Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage Count
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {referralCodes.map((code) => (
                <tr key={code._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {code._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {code.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No referral codes available.</p>
      )}
    </div>
  );
};

export default Referral;
