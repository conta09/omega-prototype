import React from 'react'
import { FaLink, FaUsers, FaAddressBook, FaFileInvoiceDollar, FaUser, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import { GrHomeRounded } from "react-icons/gr";

import Image from 'next/image';
const AdminBar = () => {
    return (
        <div className="h-screen bg-gray-900 text-white flex flex-col items-center p-4">
          <div className="text-2xl py-3 font-bold mb-6">ADMIN</div>
          <div className="flex flex-col items-center mb-8">
          <Image
        src="/profile.png"
        alt="logo"
        width={100}
        height={100}
      />     
           
            <div className="text-sm text-teal-400">Admin Name</div>
          </div>
          <div className="flex flex-col w-full space-y-4">
            <div className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
            <GrHomeRounded className="mx-5 text-[#4C528C]" />
            <span className="mx-5 text-[#4C528C]">Dashboard</span>
            </div>
            <div className="w-full mx-5 mt-4 text-gray-400">Data</div>
            <div className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
              <FaUsers className=" mx-5  h-6 text-gray-400" />
              <span className='mx-5'>Manage Users</span>
            </div>
            <div className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
              <FaAddressBook className=" mx-5 h-6 text-gray-400" />
              <span className='mx-5'>Approvals</span>
            </div>
            <div className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
            <FaLink className="mx-5 text-gray-400" />
            <span className='mx-5'>Refferals</span>
            </div>
           
          </div>
        </div>
      );
    }

export default AdminBar
