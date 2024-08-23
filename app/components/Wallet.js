import { useState } from 'react';
import CreateCharge from './CreateCharge';
import Trade from './Trade';
import Image from 'next/image';
import PaymentPopup from './PaymentPopup';
import DepositCrypto from './DepositCrypto';

const Wallet = ({ balance, updateBalance }) => {
  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState('');
  const [gateway, setGateway] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleGatewayClick = (type) => {
    setGateway(type);
    setAction(null);
    setShowPopup(false);
  };

  const handleActionClick = (type) => {
    setAction(type);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 rounded-xl shadow-md space-y-4 text-white">
      <div>
        <h2 className="text-[0.9rem] font-normal text-[#b3b2b2]">SELECT GATEWAY</h2>
      </div>
      <div className='flex gap-5'>
        <button onClick={() => handleGatewayClick('Momo')} className='flex items-center bg-[#141318] font-semibold py-2 px-4 rounded'>
          <div className=''>
            <Image src="/momo.jpeg" alt="logo" width={50} height={50} className='p-4' />
          </div>
          <div className="text-left ml-4 p-2">
            <h2 className="text-sm font-normal text-[#BFD48A]">Momo payment</h2>
          </div>
        </button>
       
        <button onClick={() => handleGatewayClick('Deposit')} className='flex items-center bg-[#141318] font-semibold py-2 px-4 rounded'>
        <div className=''>
            <Image src="/binance-logo.png" alt="logo" width={50} height={50} className='p-4' />
          </div>
          <h2 className="text-sm font-normal text-[#BFD48A]">Crypto payment</h2>
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
          
          </div>
        </div>
      )}

     

      {gateway === 'Deposit' && (
        <div className="mt-6">
          <DepositCrypto onClose={handleClosePopup} /> {/* Pass handleClosePopup as a prop */}
        </div>
      )}

      {showPopup && <PaymentPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Wallet;
