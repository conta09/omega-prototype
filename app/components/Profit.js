import React from 'react'
import Link from 'next/link'
const Profit = () => {
  return (
    <div className='m-10 text-center'>
      <h1 className='font-semibold lg:text-4xl text-3xl py-5 text-center'>
      The only crypto saving bot you need
      </h1>
      <p className='font-light text-[#b1b1b1]'>
      Enjoy up to 3% on all savings made daily on your account.
      </p>
      <Link href="#">
      <button className='text-black font-semibold text-[0.8rem] md:w-32 w-full py-3 px-6 rounded-md bg-white mt-6'>Start Here</button>
      </Link>
    </div>
  )
}

export default Profit;
