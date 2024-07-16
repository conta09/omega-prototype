// components/CopyTradingButton.js
import React from 'react';
import Image from 'next/image';
const Trade = () => {
  return (
    <div className="flex items-center sm:p-5 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-center  bg-teal-600 rounded-full ml-2">
      <Image
                    src="/binance-logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className='rounded-[50%] p-3'
                />
      </div>
      <div className="text-left ml-4 p-3">
        <h2 className="text-sm font-normal text-white">Crypto payment</h2>
        <p className="text-sm text-gray-400">Make crypto transactions fast</p>
      </div>
     
    </div>
  );
};

export default Trade;
