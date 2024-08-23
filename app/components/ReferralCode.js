import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

const ReferralCode = () => {
  const { data: session } = useSession();
  const [referralCode, setReferralCode] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateReferral = async () => {
    if (generated || !session?.user?.email) return;

    try {
      const response = await fetch('/api/generateReferralCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: session.user.email }),
      });

      const data = await response.json();
      setReferralCode(data.referralCode);
      setGenerated(true);
    } catch (error) {
      console.error('Failed to generate referral code:', error);
    }
  };

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-sm space-y-4">
      <div className="text-lg font-semibold text-gray-100 mb-2">
        Generate your Referral Code
      </div>
      <button
        className={`max-w-xs flex items-center justify-center bg-[#BFD48A] text-black px-4 py-2 rounded-lg ${generated ? 'cursor-not-allowed' : 'hover:bg-[#8e9e68]'}`}
        onClick={generateReferral}
        disabled={generated || !session?.user?.email}
      >
        {generated ? 'Displayed' : 'Display'}
      </button>

      {referralCode && (
        <div className="flex items-center w-full sm:w-1/2 mt-4">
          <input
            type="text"
            id="referralCode"
            value={referralCode}
            readOnly
            className="w-full p-3 bg-white rounded-l-lg border-none text-black focus:outline-none"
            onClick={(e) => e.target.select()}
          />
          <button
            onClick={() => navigator.clipboard.writeText(referralCode)}
            className="p-3 bg-[#2B3515] hover:bg-[#465428] text-[#BFD48A] font-semibold rounded-r-lg transition"
          >
            Copy
          </button>
        </div>
      )}

      <div className="p-4 rounded-lg w-full sm:w-3/4 text-gray-100 space-y-2">
        <h3 className="text-lg text-[#868686] font-medium">How to Use Your Referral Code:</h3>
        <ol className="list-decimal list-inside space-y-1 py-2">
          <li>Generate your referral code by clicking the &quot;Copy&quot; button above and copy it.</li>
          <li className='py-2'>Share your referral code with friends and family through social media, email, or messaging apps.</li>
          <li>When they sign up using your referral code, you&apos;ll both receive rewards (if applicable).</li>
        </ol>
      </div>
    </div>
  );
};

export default ReferralCode;
