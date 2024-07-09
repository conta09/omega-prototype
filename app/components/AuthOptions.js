// components/AuthOptions.js

import React from 'react';

const AuthOptions = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-6 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">Phone</span> 
          </button>
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">Email</span> 
          </button>
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">Facebook</span> 
          </button>
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">Email</span> 
          </button>
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">apple</span> 
          </button>
          <button className="bg-[#2E2E2E] text-white py-4 px-4 rounded-lg flex items-center justify-center space-x-2">
            <span className="material-icons">facebook</span> 
          </button>
        </div>
        <p className="text-white text-center">Join Omega Trading by signing up with a google account, phone number, or email to start making profits.</p>
      </div>

      <div className="flex flex-col w-1/2 bg-[#202020] p-4 rounded-lg space-y-4">
        <h2 className="text-[#666666] text-[0.8rem]">Create an account</h2>
        <label className="text-[#666666] text-[0.8rem] mb-1 mr-6">Enter name</label>
       <input
        type="text" 
        value="First merchant"
        readOnly
        className="bg-black text-white py-2 px-4 rounded-lg md:w-2/4 text-[0.9rem] focus:outline-none border-none cursor-default
                   shadow-[0_0_15px_rgba(255,255,255,0.2)]"
       />
        <button className="w-2/4 bg-[#2E2E2E] text-white py-4 px-4 rounded-xl">Create an account</button>
        <p className="text-white  w-2/3">Set up your first merchant account with Cryptomus to start accepting payments and get a reliable Business Wallet.</p>
      </div>
    </div>
  );
};

export default AuthOptions;
