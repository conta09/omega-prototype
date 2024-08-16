import React from 'react';
import { FaLock, FaChartLine, FaHeadset, FaThumbsUp } from "react-icons/fa";

const About = () => {
  return (
    <section className='px-6 lg:px-20 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl lg:text-5xl font-bold text-white'>Why Choose Omega Trading?</h1>
        <p className='mt-4 text-lg lg:text-xl text-gray-400'>
          The ultimate platform to secure, save, and grow your cryptocurrency investments.
        </p>
      </div>
      <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-4'>
        
        <div className='bg-[#1a1a1a] p-8 rounded-2xl shadow-lg flex flex-col items-center'>
          <FaLock className='text-4xl text-green-500 mb-4' />
          <h2 className='font-semibold text-2xl mb-4 text-white'>Secure</h2>
          <p className='text-center text-gray-400'>
            State-of-the-art encryption and security measures to keep your assets safe and secure.
          </p>
        </div>

        <div className='bg-[#1a1a1a] p-8 rounded-2xl shadow-lg flex flex-col items-center'>
          <FaChartLine className='text-4xl text-yellow-500 mb-4' />
          <h2 className='font-semibold text-2xl mb-4 text-white'>High Profits</h2>
          <p className='text-center text-gray-400'>
            Our platform offers competitive interest rates to maximize your earnings on crypto holdings.
          </p>
        </div>

        <div className='bg-[#1a1a1a] p-8 rounded-2xl shadow-lg flex flex-col items-center'>
          <FaHeadset className='text-4xl text-blue-500 mb-4' />
          <h2 className='font-semibold text-2xl mb-4 text-white'>24/7 Support</h2>
          <p className='text-center text-gray-400'>
            Our dedicated customer support team is always available to assist you with any queries.
          </p>
        </div>

        <div className='bg-[#1a1a1a] p-8 rounded-2xl shadow-lg flex flex-col items-center'>
          <FaThumbsUp className='text-4xl text-purple-500 mb-4' />
          <h2 className='font-semibold text-2xl mb-4 text-white'>Reliable</h2>
          <p className='text-center text-gray-400'>
            Trusted by thousands of users worldwide for our transparency and reliability.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
