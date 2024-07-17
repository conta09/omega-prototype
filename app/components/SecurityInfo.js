// components/SecurityInfo.js
import React from 'react'
import { IoLockClosedOutline } from "react-icons/io5";
import { FaCloudArrowDown } from "react-icons/fa6";
import { GoStack } from "react-icons/go";

const SecurityInfo = () => {
    return (
      <div className="bg-[#151718] text-white py-20 rounded-lg shadow-lg">
        <h2 className="text-2xl font-medium mb-6 text-center">
          Your funds are <span className="text-blue-500">safe and integrated</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center  p-4">
          <IoLockClosedOutline 
            className='mx-auto text-xl my-2'
            />
            <h3 className="text-xl font-medium mb-2">Data security is guaranteed</h3>
            <p className="text-gray-400 ">
              ISO 27001 certified security that is equal with online banks security.
            </p>
          </div>
          <div className="text-center p-4">
          <FaCloudArrowDown  
            className='mx-auto text-xl my-2'
            />
            <h3 className="text-xl font-medium mb-2">Data is stored in the cloud</h3>
            <p className="text-gray-400">
              You can access all data easily and quickly. Speed up business processes.
            </p>
          </div>
          <div className="text-center p-4">
          <GoStack 
            className='mx-auto text-xl my-2'
            />
            <h3 className="text-xl font-medium mb-2">Integrated features</h3>
            <p className="text-gray-400">
              All available features will be integrated and updated automatically.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SecurityInfo;
  