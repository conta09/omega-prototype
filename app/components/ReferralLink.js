// components/ReferralLink.js
"use client"
import { useState } from 'react';
import axios from 'axios';

const ReferralLink = ({ userId }) => {
  const [referralLink, setReferralLink] = useState('');

  const generateReferralLink = async () => {
    try {
      const response = await axios.post('/api/generateReferral', { userId });
      setReferralLink(response.data.referralLink);
    } catch (error) {
      console.error('Error generating referral link:', error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className=" p-4 max-w-md ml-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl  font-bold ">Referral Program</h2>
      <p className='w-[16rem]  py-3 text-[0.9rem]'>Refer friends and earn rewards for each successful referral made</p>
      <button
        onClick={generateReferralLink}
        className="bg-white  text-black font-bold py-2 px-7 rounded-lg"
      >
        Generate Referral Link
      </button>
      {referralLink && (
        <div className="space-y-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full px-3 py-2 border rounded"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default ReferralLink;
