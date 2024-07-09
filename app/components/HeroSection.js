"use client"
import Link from 'next/link'
import React from 'react'
const HeroSection = () => {
  return (
    <section id='hero' className='my-10'>
<div className='flex flex-col justify-center items-center mt-5'>
    <div className='flex flex-col items-center lg:w-2/4 w-3/4 mt-5'>
      <h1 className='font-semibold lg:text-6xl text-3xl py-5 text-center'>Be smart,save smart with Omega crypto bot</h1>
      <Link href="/login">
      <button className='text-black font-bold text-[0.8rem] py-3 px-6 rounded-md bg-white mt-6'>GET STARTED</button>
      </Link>
    </div>

    </div>
    </section>
    
  )
}

export default HeroSection
