import React, { useState, useEffect } from 'react';
import { FaHandHoldingUsd, FaRegUser } from 'react-icons/fa';
import WithdrawRequest from './WithdrawRequest';


const TopBar = ({ handleDepositClick }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [cryptoBalance, setCryptoBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/user-balance');
        if (response.ok) {
          const data = await response.json();
          setBalance(data.availableBalance);
          setCryptoBalance(data.cryptoBalance);
        } else {
          console.error('Failed to fetch balance');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  const handleWithdrawClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-[#141318] text-white p-6 rounded-[35px] max-w-[28rem] lg:max-w-[50rem] mx-auto">
      <div className="flex items-center">
        <h1 className="text-[1.2rem] text-[#BFD48A] font-normal py-5">Dashboard</h1>
      </div>
      <div className="mt-2">
        <p className="font-thin text-[0.8rem]">Total Balance in FRW</p>
        <p className="text-xl py-1 font-semibold">{balance} <span className='text-[#6e6d6d]'>RWF</span></p>
      </div>
      <div className="pt-4">
        <p className="font-thin text-[0.8rem]">Crypto Balance</p>
        <div className="flex items-center space-x-2">
          <p className="text-2xl py1 font-semibold">{cryptoBalance} <span className='text-[#6e6d6d]'>USDT</span></p>
        </div>
      </div>
      <div className="flex space-x-4 my-5">
        <button
          onClick={handleDepositClick}
          className="flex items-center justify-center bg-[#BFD48A] text-black px-4 py-2 rounded-lg hover:bg-[#8e9e68]"
        >
          <FaHandHoldingUsd className="mr-2" />
          Deposit
        </button>
        <button
          onClick={handleWithdrawClick}
          className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          <FaHandHoldingUsd className="mr-2" />
          Withdraw
        </button>
      </div>

      {isPopupOpen && <WithdrawRequest onClose={closePopup} />}
    </div>
  );
};

export default TopBar;
