"use client"
import { IoCloseCircleOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { FaLink } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from "next/navigation";
const Sidebar = ({ setContent, toggleMenu, activeMenu }) => {

    const router = useRouter();

  const handleLogout = async () => {
    // Clear the authentication cookie
    document.cookie = "user-authenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Optionally, you can also make an API call to your backend to invalidate the session
    // await fetch('/api/logout', { method: 'POST' });

    // Redirect to the home page
    router.push('/');
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
                <button onClick={toggleMenu} className="text-2xl rounded-full md:hidden ml-auto px-6">
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
                
                <button onClick={() => setContent('referrals')} className="flex items-center px-4 py-3 hover:bg-[#242424] w-64 text-left rounded-lg">
                    <FaLink className="mx-5" />
                    Referrals
                </button>
               
                <div className='flex flex-col text-left px-5 mt-5 '>
                    <button  onClick={handleLogout} className="text-[#828080] my-4 border-white border-[1px] font-medium py-3 px-5 text-left  rounded-lg">
                        Log Out
                    </button>
                    <div className='text-[#5f5e5e] font-normal'>
                        Email:<span>johndoe@gmail.com</span>
                    </div>
                    <div className='text-[#5f5e5e] font-normal'>
                        Name:<span>johndoe</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
