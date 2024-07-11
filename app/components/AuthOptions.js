// components/AuthOptions.js

import React from 'react';
import Link from 'next/link';
const AuthOptions = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center m-10 rounded-lg space-y-6 md:space-y-0 md:space-x-3">
      <div className='flex flex-col'>
        <p className='font-semibold lg:text-3xl text-xl py-5 '>
        CRYPTO EARN
        </p>
        <h1 className='text-[#b1b0b0]'>
        Become a member of a global community
        </h1>
        <Link href="#">
      <button className='text-black font-semibold text-[0.8rem] w-full py-3 px-6 rounded-md bg-white mt-6'>Sign Up</button>
      </Link>
      <Link href="#">
      <button className='text-white border-[1px] font-semibold text-[0.8rem]  w-full py-3 px-6 rounded-md  mt-3'>Contact Us</button>
      </Link>
        
      </div>
    
      <div className="flex flex-col w-96 bg-[#202020] p-4 rounded-lg space-y-4">
        <h2 className="text-[#666666] text-[0.8rem]">Create an account</h2>
        <label className="text-[#666666] text-[0.8rem] mb-1 mr-6">Enter name</label>
       <input
        type="text" 
        value="Enter name"
        readOnly
        className="bg-black text-white py-2 px-4 rounded-lg md:w-2/4 text-[0.9rem] focus:outline-none border-none cursor-default
                   shadow-[0_0_15px_rgba(255,255,255,0.2)]"
       />
        <button className="w-2/4 bg-[#2E2E2E] text-white py-4 px-4 rounded-xl">Create an account</button>
        <p className="text-white  w-2/3">Set up your first account with Omega-crypto-bot to start accepting payments and get a reliable saving wallet.</p>
      </div>
    </div>
  );
};

export default AuthOptions;
