import React from 'react';
import Link from 'next/link';

const Profit = () => {
  return (
    <div className='flex flex-col items-center justify-center p-8 lg:p-16 bg-[#141318] rounded-lg shadow-lg text-center'>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-white mb-4'>
        The Ultimate Crypto Saving Bot
      </h1>
      <p className='text-lg lg:text-xl text-gray-300 mb-6'>
        Unlock the full potential of your crypto investments with our advanced saving bot. Enjoy daily returns of up to 3% and watch your savings grow effortlessly.
      </p>
      <div className='flex flex-col items-center space-y-4'>
        <Link href="#">
            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm lg:text-base py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300'>
              Get Started
            </button>
        </Link>
        <p className='text-gray-400 text-sm'>
          No fees, no hidden costs—just straightforward, transparent savings. Start today and see the difference.
        </p>
      </div>
    </div>
  );
};

export default Profit;
