"use client"
import React, { useState } from 'react';

const WithdrawRequest = ({ onClose }) => {
  const [withdrawMethod, setWithdrawMethod] = useState('momo'); // Default to MoMo

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center p-5">
      <div className="bg-white p-6 rounded-xl shadow-md text-center sm:max-w-[16rem] lg:max-w-[27rem] ">
        <div className="mb-4 items-center">
          <h2 className="text-lg font-semibold mb-4 text-black">Withdraw Funds</h2>
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 rounded-l-lg ${withdrawMethod === 'momo' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setWithdrawMethod('momo')}
            >
              MoMo
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${withdrawMethod === 'crypto' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setWithdrawMethod('crypto')}
            >
              Crypto
            </button>
          </div>

          {withdrawMethod === 'momo' && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-base font-semibold mb-2 text-black">MoMo Withdrawal</h3>
              <ol className="list-decimal list-inside text-left text-gray-700">
                <li>Copy the number below: <strong>0 788 819 111</strong></li>
                <li>Send the amount of money to this number.</li>
                <li>Take a screenshot of the transaction and send it to WhatsApp: <strong>0 788 819 111</strong></li>
                <li>Await admin approval.</li>
              </ol>
            </div>
          )}

          {withdrawMethod === 'crypto' && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-base font-semibold mb-2 text-black">Crypto Withdrawal</h3>
              <form className="text-left text-gray-700">
                <label className="block mb-2">
                  Crypto Address:
                  <input type="text" className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
                <label className="block mb-2">
                  Amount (USDT):
                  <input type="text" className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
              </form>
            </div>
          )}
        </div>

        <div className="flex justify-around mt-4">
          <button onClick={() => window.location.href = '/'} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            Proceed
          </button>
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawRequest;
