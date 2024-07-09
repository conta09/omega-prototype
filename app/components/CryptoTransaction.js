import React, { useState } from 'react';

const CryptoTransaction = () => {
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const address = 'TGGLKTzhZs2LC8TqHucYKWUGeqaPozu6oo';
  const [crypto, setCrypto] = useState('Ethereum');

  const handleContinue = () => {
    // Replace this URL with the actual URL of your crypto gateway
    const gatewayUrl = `https://commerce.coinbase.com/checkout/e373efc7-1e36-4068-a2fe-597afda54d14`;
    window.location.href = gatewayUrl;
  };

  return (
    <div className="bg-black text-white border-2 border-[#585858] p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <div className="flex justify-between mb-4">
        <button
          className={`w-1/2 p-2 ${activeTab === 'send' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('send')}
        >
          Send
        </button>
        <button
          className={`w-1/2 p-2 ${activeTab === 'receive' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('receive')}
        >
          Receive
        </button>
      </div>
      <div className="mb-4">
        <div className="text-center text-3xl mb-2">{amount || '0'} <span className="text-blue-500">ETH</span></div>
        <p className="text-center text-gray-400">Amount is a required field</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400" htmlFor="address">To</label>
        <input
          type="text"
          id="address"
          value={address}
          readOnly
          className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-gray-200 focus:outline-none"
          onClick={(e) => e.target.select()} // Select the text on click for easy copying
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-gray-400" htmlFor="crypto">Pay with</label>
        <select
          id="crypto"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded border border-gray-700 text-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="Ethereum">Ethereum</option>
          <option value="Bitcoin">Bitcoin</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button
        className="w-full p-3 bg-white rounded-lg text-black font-semibold hover:bg-[#e5e5e5] focus:outline-none"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default CryptoTransaction;
