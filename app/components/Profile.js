import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (session?.user?.email) {
          const response = await fetch(`/api/user-data?email=${session.user.email}`);
          const result = await response.json();

          if (response.ok) {
            setUserData(result);
          } else {
            setError(result.error);
          }
        }
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [session]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white p-6 rounded-[35px] max-w-[28rem] lg:max-w-[50rem] mx-auto">
      <div className="mt-2">
        <table className="w-full text-left text-sm mt-4">
          <tbody>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Name</td>
              <td className="text-[#BFD48A] font-semibold">{userData.name}</td>
            </tr>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Total Balance in FRW</td>
              <td className="text-[#BFD48A] font-semibold">{userData.availableBalance} RWF</td>
            </tr>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Crypto Balance</td>
              <td className="text-[#BFD48A] font-semibold">{userData.cryptoBalance} USDT</td>
            </tr>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Crypto Profit</td>
              <td className="text-[#BFD48A] font-semibold">{userData.cryptoProfit} USDT</td>
            </tr>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Amount Profit</td>
              <td className="text-[#BFD48A] font-semibold">{userData.amountProfit} RWF</td>
            </tr>
            <tr>
              <td className="font-thin text-[0.8rem] py-2">Referral Profit</td>
              <td className="text-[#BFD48A] font-semibold">{userData.referralProfit} RWF</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
