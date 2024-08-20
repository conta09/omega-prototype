"use client"
import React, { useState } from 'react';

const WithdrawRequest = ({ onClose }) => {
  const [withdrawMethod, setWithdrawMethod] = useState('momo');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amountRWF, setAmountRWF] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [amountUSDT, setAmountUSDT] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const data = {
      email,
      phoneNumber: withdrawMethod === 'momo' ? phoneNumber : null,
      amountRWF: withdrawMethod === 'momo' ? amountRWF : null,
      cryptoAddress: withdrawMethod === 'crypto' ? cryptoAddress : null,
      amountUSDT: withdrawMethod === 'crypto' ? amountUSDT : null,
    };

    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.message);

      // Clear form fields after successful submission
      if (response.ok) {
        setEmail('');
        setPhoneNumber('');
        setAmountRWF('');
        setCryptoAddress('');
        setAmountUSDT('');
      }
    } catch (error) {
      setMessage('An error occurred while sending the request.');
      console.error(error);
    }
  };

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
              <form className="text-left text-gray-700">
                <label className="block mb-2">
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
                <label className="block mb-2">
                  Phone number:
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
                <label className="block mb-2">
                  Amount (RWF):
                  <input type="text" value={amountRWF} onChange={(e) => setAmountRWF(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
              </form>
              <p className='text-black'>Click proceed, wait 5min-6hrs</p>
            </div>
          )}

          {withdrawMethod === 'crypto' && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-base font-semibold mb-2 text-black">Crypto Withdrawal</h3>
              <form className="text-left text-gray-700">
                <label className="block mb-2">
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
                <label className="block mb-2">
                  Crypto Address:
                  <input type="text" value={cryptoAddress} onChange={(e) => setCryptoAddress(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
                <label className="block mb-2">
                  Amount (USDT):
                  <input type="text" value={amountUSDT} onChange={(e) => setAmountUSDT(e.target.value)} className="w-full p-2 mt-1 rounded-lg border border-gray-300" />
                </label>
              </form>
              <p className='text-black'>Click proceed, wait 5min-6hrs</p>
            </div>
          )}

        </div>

        <div className="flex justify-around mt-4">
          <button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            Proceed
          </button>
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default WithdrawRequest;
