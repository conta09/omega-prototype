import React from 'react';

const ReferralCode = () => {
    const address = 'TGGLwewdnefsndowedqHucYKWUGeqaPozu6oo';

    return (
        <div className="flex flex-col p-4 rounded-lg shadow-sm space-y-4">
            <div className="text-lg font-semibold text-gray-100 mb-2">
                Get your Referral Code
            </div>
            <div className="flex items-center w-full sm:w-1/2">
                <input
                    type="text"
                    id="address"
                    value={address}
                    readOnly
                    className="w-full p-3 bg-white rounded-l-lg border-none text-black focus:outline-none"
                    onClick={(e) => e.target.select()} // Select the text on click for easy copying
                />
                <button
                    onClick={() => navigator.clipboard.writeText(address)}
                    className="p-3 bg-[#2B3515] hover:bg-[#465428] text-[#BFD48A] font-semibold rounded-r-lg transition"
                >
                    Copy
                </button>
            </div>
            <div className="p-4 rounded-lg w-full sm:w-3/4 text-gray-100 space-y-2">
                <h3 className="text-lg text-[#868686] font-medium">How to Use Your Referral Code:</h3>
                <ol className="list-decimal list-inside space-y-1 py-2">
                    <li>Copy your referral code by clicking the &quot;Copy&quot; button above.</li>
                    <li className='py-2'>Share your referral code with friends and family through social media, email, or messaging apps.</li>
                    <li>When they sign up using your referral code, you&apos;ll both receive rewards (if applicable).</li>
                </ol>
            </div>
        </div>
    );
};

export default ReferralCode;
