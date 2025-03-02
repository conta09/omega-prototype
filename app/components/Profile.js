"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ChartBarIcon, CurrencyDollarIcon, ArrowsRightLeftIcon, GiftIcon, UserCircleIcon } from '@heroicons/react/24/outline';

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
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-2xl max-w-2xl mx-auto mt-4">
        Error: {error}
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#BFD48A] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
        <UserCircleIcon className="h-12 w-12 text-[#7132F5]" />
        <div>
          <h1 className="text-2xl font-bold text-[#948e8e]">Hi, {userData.name}</h1>
          <p className="text-sm text-gray-500">{session?.user?.email}</p>
        </div>
      </div>

      {/* Balance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Total Balance Card */}
        <div className="bg-gradient-to-br from-[#7032f5c9] to-[#40227b] p-6 rounded-2xl text-white shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Total Balance</p>
              <p className="text-3xl font-bold mt-2">$ {userData.availableBalance}</p>
            </div>
            <CurrencyDollarIcon className="h-8 w-12 opacity-90" />
          </div>
        </div>

        {/* Crypto Balance Card */}
        <div className=" p-6 rounded-2xl bg-white/10 backdrop-blur-lg  text-white hover:brightness-110 transition-all font-medium shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Crypto Assets</p>
              <div className="mt-2">
                <p className="text-2xl font-bold">{userData.cryptoBalance} USDT</p>
              </div>
            </div>
            <ArrowsRightLeftIcon className="h-8 w-12 text-[#502aa1fa]" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Crypto Profit */}
        <div className=" p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-xl">
              <ChartBarIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Crypto Profit</p>
              <p className="text-xl font-semibold text-white">{userData.cryptoProfit} USDT</p>
            </div>
          </div>
        </div>

        {/* Referral Profit */}
        <div className=" p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-xl">
              <GiftIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Referral Profit</p>
              <p className="text-xl font-semibold text-white">{userData.referralProfit} USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
