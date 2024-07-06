import React from 'react';
import { FaHandHoldingUsd, FaRegUser } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';

const TopBar = ({ balance, handleDepositClick, handleWithdrawClick }) => {
  return (
    <div className="bg-[#242424] text-white p-6 rounded-b-[35px] max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-[1.2rem] font-semibold py-5">Dashboard</h1>
        <div className="flex space-x-2 mx-2">
          {/* 
          <button className="bg-black rounded-3xl">
            <IoNotificationsOutline className="text-xl sm:text-lg m-2" />
          </button>
          <button className=" bg-black rounded-2xl">
            <FaRegUser className="text-xl sm:text-lg m-2" />
          </button>
          */}
          
          <button className="md:hidden text-xl m-2 bg-black rounded-3xl">
            <RiMenu4Fill className="text-xl m-2" />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[#686868] text-[0.9rem]">Available Balance</p>
        <p className="text-2xl py-3 font-bold">${balance}</p>
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
