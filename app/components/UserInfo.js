import React from 'react'

const UserInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center mx-5 items-center bg-black text-white p-8 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
        <div className="bg-[#2E2E2E] p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4">
          <img src="/circle.png" alt="Top companies" className="h-24 w-24 rounded-full object-cover" />
          <p>Stand alongside top companies</p>
        </div>
        <div className="bg-[#2E2E2E] p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4">
          <img src="/polygon.png" alt="Processing fees" className="h-24 w-32  " />
          <p>Save up to 80% on processing fees</p>
        </div>
        <div className="bg-[#2E2E2E] p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4">
          <img src="/polygon.png" alt="Worldwide users" className="h-24 w-24 rounded-full object-cover" />
          <p>Tap into millions of users worldwide</p>
        </div>
        <div className="bg-[#2E2E2E] p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-4">
          <img src="/lines.png" alt="Sales conversion" className="h-24 w-24  " />
          <p>Increase profits conversion</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-start  lg:ml-12 mt-6 lg:mt-0">
        <h2 className="text-3xl w-2/3 font-bold mb-4 text-left ">
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
