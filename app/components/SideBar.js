import { useState } from 'react';
import { FaHistory, FaLink } from 'react-icons/fa';
import { GrHomeRounded } from "react-icons/gr";
import { IoWalletOutline, IoCloseCircleOutline } from "react-icons/io5";
import Image from 'next/image';

const Sidebar = ({ setContent }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    return (
        <div className={`fixed inset-0 z-50 transition-transform transform ${activeMenu ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 md:w-96 h-full bg-black text-white flex flex-col`}>
            <div className="flex items-center justify-center my-7 px-4">
                
                <Image
                    src="/omega-logo.png"
                    alt="logo"
                    width={120}
                    height={120}
                />
                <button onClick={toggleMenu} className="text-2xl rounded-full md:hidden ml-auto px-4">
                    <IoCloseCircleOutline />
                </button>
            </div>

            <div className="flex-grow mx-auto text-[0.9rem] font-semibold">
                <button onClick={() => setContent('home')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <GrHomeRounded className="mx-5" />
                    Home
                </button>
                <button onClick={() => setContent('wallet')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <IoWalletOutline className="mx-5 text-lg" />
                    Wallet
                </button>
                <button onClick={() => setContent('transactionHistory')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <FaHistory className="mx-5" />
                    Transaction history
                </button>
                <button onClick={() => setContent('referrals')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <FaLink className="mx-5" />
                    Referrals
                </button>
                <button onClick={() => setContent('referrals')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <FaLink className="mx-5" />
                    Markets
                </button>
                <div className='flex flex-col text-left px-5 '>
                    <button  className="text-[#828080] font-normal  py-4 text-left  w-64 rounded-lg">
                        Log Out
                    </button>
                    <div className='text-[#5f5e5e] font-normal'>
                        id:<span>AS2355c</span>
                    </div>
                    <div className='text-[#5f5e5e] font-normal'>
                        Email:<span>johndoe@gmail.com</span>
                    </div>
                </div>
                

                
            </div>
        </div>
    );
};

export default Sidebar;
