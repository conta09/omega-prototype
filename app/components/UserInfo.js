import React from 'react'
import Image from 'next/image';
const UserInfo = () => {
  return (
    <div className="flex sm:h-[90vh] flex-col lg:flex-row justify-center mx-5 items-center bg-black text-white p-8 rounded-lg">
      <div className="border-2 border-[#1F1E24] rounded-md">
      <Image
                    src="/crypto-bg.png"
                    alt="logo"
                    width={400}
                    height={500}
                />
      </div>
      <div className="lg:w-1/2 flex flex-col items-start  lg:ml-12 mt-6 lg:mt-0">
        <h2 className="text-3xl w-2/3 font-semibold mb-4 text-left ">
          Discover new opportunities with our system profit solution
        </h2>
        <button className="bg-white text-black py-2 px-4 rounded-lg mt-4 hover:bg-gray-200">
          Contact Omega team
        </button>
      </div>
    </div>
  );
};



export default UserInfo
