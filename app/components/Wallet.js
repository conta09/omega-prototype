import { useState } from 'react';
import CreateCharge from './CreateCharge';
import Trade from './Trade';
import Image from 'next/image';
import PaymentPopup from './PaymentPopup'; // Import the new component

const Wallet = ({ balance, updateBalance }) => {
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState('');
  const [gateway, setGateway] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleGatewayClick = (type) => {
    setGateway(type);
    setAction(null); // Reset action when changing gateway
    setShowPopup(false); // Close popup when changing gateway
  };

  const handleActionClick = (type) => {
    setAction(type);
    setShowPopup(true); // Show popup when deposit or withdraw is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 rounded-xl shadow-md space-y-4 text-white">
      <div>
        <h2 className="text-[0.9rem] font-normal text-[#b3b2b2]">SELECT GATEWAY</h2>
      </div>
      <div className='flex'>
        <button onClick={() => handleGatewayClick('Momo')} className='flex items-center bg-[#141318]  font-semibold py-2 px-4 rounded'>
          <div className='bg-white'>
            <Image src="/momo.jpeg" alt="logo" width={50} height={50} className='p-4' />
          </div>
          <div className="text-left ml-4 p-2">
        <h2 className="text-sm font-normal text-[#BFD48A]">Momo payment</h2>
      </div>
        </button>
        <button onClick={() => handleGatewayClick('Binance')} className='text-black font-semibold py-2 px-4 rounded'>
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
              className="hover:bg-white hover:text-black text-white w-1/3 font-bold py-2 px-4 border-[1px] border-white rounded"
            >
              Withdraw
            </button>
          </div>
        </div>
      )}

      {gateway === 'Binance' && (
        <div className="mt-4">
          <CreateCharge />
        </div>
      )}

      {showPopup && <PaymentPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Wallet;
