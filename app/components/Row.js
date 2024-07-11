import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';



const Row = ({ toggleMenu }) => {
  return (
    <div className='flex justify-between my-3 ml-auto'>
    <button onClick={toggleMenu} className="md:hidden text-xl pr-3 m-2 bg-black rounded-3xl">
            <RiMenu4Fill className="text-xl m-2" />
    </button>

    <button className=" hidden bg-[#242424] rounded-2xl">
          <FaRegUser className="text-xl sm:text-lg m-2" />
        </button>
  </div>
  )
}

export default Row
