"use client"
import { useState } from 'react';
import WalletSelection from './WalletSelection';
import Image from 'next/image';

const Wallet = ({ balance, updateBalance }) => {
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState('');
  const [gateway, setGateway] = useState(null);

  const handleGatewayClick = (type) => {
    setGateway(type);
    setAction(null); // Reset action when changing gateway
  };

  const handleActionClick = (type) => {
    setAction(type);
    setAmount('');
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action && amount) {
      updateBalance(amount, action);
      console.log(`${action} amount: $${amount}`);
    }
    setAction(null);
    setAmount('');
  };

  return (
    <div className="p-6 max-w-sm rounded-xl shadow-md space-y-4 text-white">
      <div>
        <h2 className="text-xl font-semibold">Select Gateway</h2>
      </div>
      <div className='flex space-x-4'>
        <button onClick={() => handleGatewayClick('Momo')} className='text-black font-semibold py-2 px-4 rounded'>
          <Image src="/momo.jpeg" alt="Momo" width={100} height={160} />
        </button>
        <button onClick={() => handleGatewayClick('Binance')} className='bg-white text-black font-semibold py-2 px-4 rounded'>
          <Image src="/binance.jpg" alt="Binance" width={100} height={160} />
        </button>
      </div>

      {gateway === 'Momo' && (
        <div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleActionClick('Deposit')}
              className="bg-white text-black font-semibold py-2 px-4 rounded"
            >
              Deposit
            </button>
            <button
              onClick={() => handleActionClick('Withdraw')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Withdraw
            </button>
          </div>
          {action && (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-normal text-gray-200">
                  Enter amount to {action.toLowerCase()}:
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-3 bg-[#242424] border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-[#242424] sm:text-sm"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full hover:bg-white text-white hover:text-black font-semibold text-[1rem] py-3 px-4 rounded bg-[#242424]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}

      {gateway === 'Binance' && (
        <div className="mt-4">
          <WalletSelection />
        </div>
      )}
    </div>
  );
};

export default Wallet;
