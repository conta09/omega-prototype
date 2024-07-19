import { useState } from 'react';
import CryptoTransaction from './CryptoTransaction';
import { SiLetsencrypt } from "react-icons/si";
import { IoCloseCircleOutline } from "react-icons/io5";
import Trade from './Trade';
import PaymentPage from './PaymentPage';
import Image from 'next/image';
const Wallet = ({ balance, updateBalance }) => {
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState('');
  const [gateway, setGateway] = useState(null);
  const [showCryptoPopup, setShowCryptoPopup] = useState(false); // State to manage popup visibility

  const handleGatewayClick = (type) => {
    setGateway(type);
    setAction(null); // Reset action when changing gateway
    setShowCryptoPopup(false); // Close popup when changing gateway
  };

  const handleActionClick = (type) => {
    setAction(type);
    setAmount('');
    setShowCryptoPopup(false); // Close popup when action is selected
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action && amount) {
      updateBalance(amount, action);
      console.log(`${action} amount: $${amount}`);
    }
    setAction(null);
    setAmount('');
    setShowCryptoPopup(false); // Close popup after submitting
  };

  const handleShowPopup = () => {
    setShowCryptoPopup(true); // Show popup when clicked
  };

  return (
    <div className="p-4  rounded-xl shadow-md space-y-4 text-white">
      <div>
        <h2 className="text-[0.9rem] font-normal text-[#b3b2b2]">SELECT GATEWAY</h2>
      </div>
      <div className=' flex '>
        <button onClick={() => handleGatewayClick('Momo')} className='text-black font-semibold py-2 px-4 rounded'>
        <div className='bg-white'>
        <Image
                    src="/momo.jpeg"
                    alt="logo"
                    width={50}
                    height={50}
                    className='p-4'
                />
        </div>
        </button>
        <button onClick={() => handleGatewayClick('Binance')} className=' text-black font-semibold py-2 px-4 rounded'>
        <Trade />
        </button>
      </div>

      {gateway === 'Momo' && (
        <div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleActionClick('Deposit')}
              className="bg-white hover:bg-[#c9c8c8] text-black font-semibold py-2 px-4 rounded w-1/3"
            >
              Deposit
            </button>
            <button
              onClick={() => handleActionClick('Withdraw')}
              className=" hover:bg-white hover:text-black text-white w-1/3 font-bold py-2 px-4 border-[1px] border-white rounded"
            >
              Withdraw
            </button>
          </div>
          {action && (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-normal text-gray-200">
                  Enter amount to {action.toLowerCase()}:
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-3 bg-[#242424] border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-[#242424] sm:text-sm"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full hover:bg-white text-white hover:text-black font-semibold text-[1rem] py-3 px-4 rounded bg-[#242424]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      )}

      {gateway === 'Binance' && (
        <div className="mt-4">
          <PaymentPage />
          {/* Button to show crypto transaction popup 
          <button
            onClick={handleShowPopup}
            className="flex hover:bg-white hover:text-black border-white border-[1px] font-medium py-3 px-5 rounded-lg"
          >
            <SiLetsencrypt className='mx-3 ' />
            Proceed to Transaction
          </button>
           */}
          {/* Popup for crypto transaction 
          {showCryptoPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className=" p-6 rounded-xl shadow-md">
                <CryptoTransaction />
                <button
                  onClick={() => setShowCryptoPopup(false)}
                  className="absolute top-0 right-10 text-[2rem] m-10 text-white hover:text-gray-700"
                >
                <IoCloseCircleOutline />
                </button>
              </div>
            </div>
          )}
          */}
        </div>
      )}
    </div>
  );
};

export default Wallet;
