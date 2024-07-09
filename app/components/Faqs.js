"use client"
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Omega Crypto Bot?",
      answer: "A cryptocurrency exchange is a platform that allows users to buy, sell, and trade cryptocurrencies."
    },
    {
      question: "What services does Omega provide?",
      answer: "Binance provides a wide range of products including spot trading, futures trading, staking, savings, and more."
    },
    {
      question: "How to buy transfer and other cryptocurrencies on Omega?",
      answer: "You can buy Bitcoin and other cryptocurrencies on Binance by creating an account, depositing funds, and placing an order."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto p-6  text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700 py-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg">{faq.question}</h2>
            <span>
              {activeIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </div>
          {activeIndex === index && <p className="mt-4 text-base">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
