import React from 'react';
import Image from 'next/image';

const UserInfo = () => {
  return (
    <div className="flex sm:h-[90vh] flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-12">
      
      <div className="w-full lg:w-auto flex justify-center lg:justify-start">
        <div className="border-4 border-[#2F2E36] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/crypto-bg.png"
            alt="Crypto Background"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
          Discover New Opportunities with Our Profit Solutions
        </h2>
        <p className="text-gray-400 mb-6">
          Maximize your earnings and secure your investments with our innovative and reliable system.
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-full hover:opacity-90 transition-opacity duration-300">
          Contact Omega Team
        </button>
      </div>
      
    </div>
  );
};

export default UserInfo;
