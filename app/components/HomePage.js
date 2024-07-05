import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col md:items-center p-6'>
      <div className='md:w-1/3'>
      <h2 className="text-xl md:text-center font-bold ">No transactions yet</h2>
      <p className='w-[16rem]  py-5 text-[0.9rem]'>You have no successful transactions. You can get and share your wallet address</p>
      <button  className="bg-white md:w-full  text-black font-medium py-2 px-10 rounded-lg" >
        Get started
      </button>
      </div>
      
    </div>
  )
}

export default HomePage
