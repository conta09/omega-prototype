"use client";

import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section id='hero' className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white py-12 px-6 lg:px-16'>
      <div className='flex flex-col items-center max-w-4xl mx-auto'>
        <h1 className='text-3xl lg:text-5xl font-bold text-center mb-6'>
          Be Smart, Save Smart with <span className='text-[#BFD48A]'>Omega Crypto Bot</span>
        </h1>
        <p className='text-center  font-thin text-lg lg:text-xl mb-8'>
          Revolutionize your savings with our cutting-edge crypto bot. Experience seamless, secure, and profitable saving solutions tailored for you.
        </p>
        <Link href="#">
            <button className='bg-[#BFD48A] text-black font-bold text-sm lg:text-base py-3 px-6 rounded-full shadow-lg hover:bg-[#9eaf7a] transition-colors duration-300'>
              Get Started
            </button>
          
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
