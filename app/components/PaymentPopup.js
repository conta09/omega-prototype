import React from 'react';
import { FaTelegramPlane, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-60 flex justify-center items-center p-5">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center sm:max-w-[16rem] lg:max-w-[27rem]">
        <div className="mb-4 items-center">
          <h2 className="text-2xl font-semibold mb-3 text-black">SUCCESS</h2>
          <p className="text-base text-gray-600 mb-5">
            To request deposit funds or withdraw, please approve payment by following the steps below and confirming after the transaction.
          </p>
          <div className="bg-gray-50 p-5 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold mb-3 text-black">Steps to make payment via MoMo</h3>
            <ol className="list-decimal list-inside text-left text-gray-700 space-y-2">
              <li>Copy the code below: <strong>*182*8*1*875564#</strong></li>
              <li>Send the amount of money to this number.</li>
              <li>
                Take a screenshot of the transaction and send it via:
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="https://wa.me/250788523183" className="flex items-center text-green-600 hover:text-green-800">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                  </a>
                  <a href="mailto:support@example.com" className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaEnvelope className="mr-2" /> Email
                  </a>
                  <a href="https://t.me/yourtelegram" className="flex items-center text-blue-600 hover:text-blue-800">
                    <FaTelegramPlane className="mr-2" /> Telegram
                  </a>
                </div>
              </li>
              <li>Wait for admin approval, this may take a few moments.</li>
            </ol>
          </div>
        </div>
        <div className="flex justify-around mt-6">
          <button onClick={onClose} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full">
            Done
          </button>
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
