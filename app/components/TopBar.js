import React from 'react';
import { FaHandHoldingUsd, FaRegUser, FaBitcoin } from 'react-icons/fa';

const TopBar = ({ balance, cryptoBalance, handleDepositClick, handleWithdrawClick }) => {
  return (
    <div className="bg-[#141318] text-white p-6 rounded-[35px]  max-w-[28rem] lg:max-w-[50rem] mx-auto">
      <div className="flex  items-center">
        <h1 className="text-[1.2rem] text-[#BFD48A] font-normal py-5">Dashboard</h1>
        <div className="flex space-x-2 mx-2">
          {/* 
          <button className="bg-black rounded-3xl">
            <IoNotificationsOutline className="text-xl sm:text-lg m-2" />
          </button>
          <button className=" bg-black rounded-2xl">
            <FaRegUser className="text-xl sm:text-lg m-2" />
          </button>
          */}
        </div>
      </div>
      <div className="mt-2">
        <p className="font-thin text-[0.8rem]">Total Balance in FRW</p>
        <p className="text-xl py-1 font-semibold">{balance} <span className='text-[#6e6d6d]'>RWF</span></p>
        <p className='text-[#4ab953] hidden font-normal text-[0.8rem]'>pending</p>
      </div>
      <div className="pt-4">
        <p className="font-thin text-[0.8rem]">Crypto Balance</p>
        <div className="flex items-center space-x-2">
          <p className="text-2xl py1 font-semibold">{cryptoBalance}0.00  <span className='text-[#6e6d6d]'>USDT</span></p>
        </div>
        <p className='text-[#4ab953] font-normal hidden text-[0.8rem]'>pending</p>

      </div>
      <div className="flex space-x-4 my-5">
        <button
          onClick={handleDepositClick}
          className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
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
    </div>
  );
};

export default TopBar;
