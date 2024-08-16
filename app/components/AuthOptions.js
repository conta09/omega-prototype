import React from 'react';
import Link from 'next/link';

const AuthOptions = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-10 bg-black rounded-lg space-y-8 md:space-y-0 md:space-x-8">
      
      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <p className='font-bold text-2xl lg:text-4xl text-white py-3'>
          CRYPTO EARN
        </p>
        <h2 className='text-[#b1b0b0] text-lg lg:text-xl mb-5'>
          Join a global community and start earning today!
        </h2>
        <Link href="#">
          <button className='text-white font-semibold text-sm lg:text-base w-full md:w-auto py-3 px-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 transition-opacity duration-300'>
            Sign Up
          </button>
        </Link>
        <Link href="#">
          <button className='text-white font-semibold text-sm lg:text-base w-full md:w-auto py-3 px-8 rounded-full border border-gray-600 hover:bg-gray-700 mt-3 transition-all duration-300'>
            Contact Us
          </button>
        </Link>
      </div>
      
      <div className="flex flex-col w-full md:w-96 bg-[#141318] p-6 rounded-lg shadow-lg space-y-6">
        <h2 className="text-[#aaaaaa] text-sm">Create an account</h2>
        <label className="text-[#cccccc] text-sm">Enter your name</label>
        <input
          type="text"
          placeholder="MUGABO"
          readOnly
          className="bg-[#1F1F1F] text-white py-3 px-4 rounded-lg w-full focus:outline-none border-none shadow-inner"
        />
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-full hover:opacity-90 transition-opacity duration-300">
          Create an Account
        </button>
        <p className="text-[#cccccc] text-sm">
          Set up your first account with Omega-crypto-bot and start managing your cryptocurrency investments efficiently.
        </p>
      </div>
      
    </div>
  );
};

export default AuthOptions;
