"use client"
import React, { useState } from 'react';
import { FaLink, FaUsers, FaAddressBook, FaTimes } from 'react-icons/fa';
import { GrHomeRounded } from "react-icons/gr";
import Image from 'next/image';
import { RiMenu4Fill } from 'react-icons/ri';

const AdminBar = ({ onMenuClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('Dashboard');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        onMenuClick(menu);  // Call the function passed as a prop
        setIsOpen(false);   // Close sidebar on menu click for mobile
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-900 text-white flex flex-col items-center p-4 fixed h-full transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64 z-50`}>
                <button onClick={toggleSidebar} className="text-white self-end md:hidden">
                    <FaTimes />
                </button>
                <div className="text-2xl py-3 font-bold mb-6">ADMIN</div>
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src="/omega-logo.png"
                        alt="logo"
                        width={120}
                        height={120}
                    />
                    <div className="text-sm text-teal-400">Admin Name</div>
                </div>
                <div className="flex flex-col w-full space-y-4">
                    <button
                        className={`w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 ${activeMenu === 'Dashboard' ? 'bg-gray-800' : ''}`}
                        onClick={() => handleMenuClick('Dashboard')}
                    >
                        <GrHomeRounded className="mx-5 text-[#4C528C]" />
                        <span className="mx-5 text-[#4C528C]">Dashboard</span>
                    </button>
                    <div className="w-full mx-5 mt-4 text-gray-400">Data</div>
                    <button
                        className={`w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 ${activeMenu === 'Manage Users' ? 'bg-gray-800' : ''}`}
                        onClick={() => handleMenuClick('Manage Users')}
                    >
                        <FaUsers className="mx-5 h-6 text-gray-400" />
                        <span className='mx-5'>Manage Users</span>
                    </button>
                    <button
                        className={`w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 ${activeMenu === 'Approvals' ? 'bg-gray-800' : ''}`}
                        onClick={() => handleMenuClick('Approvals')}
                    >
                        <FaAddressBook className="mx-5 h-6 text-gray-400" />
                        <span className='mx-5'>Approvals</span>
                    </button>
                    <button
                        className={`w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 ${activeMenu === 'All transactions' ? 'bg-gray-800' : ''}`}
                        onClick={() => handleMenuClick('All transactions')}
                    >
                        <FaLink className="mx-5 text-gray-400" />
                        <span className='mx-5'>All transactions</span>
                    </button>
                    <button className='w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800'>
                    <span className='mx-5'>Log Out</span>
                    </button>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-4 ">
                <button onClick={toggleSidebar} className="text-white md:hidden">
                    <RiMenu4Fill className='text-2xl' />
                </button>
            </div>
        </div>
    );
};

export default AdminBar;
