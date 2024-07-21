"use client"
import React, { useState } from 'react';
import AdminBar from '../components/AdminBar';
import EmailsList from '../components/EmailsList';
import StatsCards from '../components/StatsCards';
import Transactions from '../components/Transactions';
function App() {
  const [activeContent, setActiveContent] = useState('Dashboard');

  const renderContent = () => {
    switch (activeContent) {
      case 'Dashboard':
        return (
          <div>
            <h1 className='text-3xl font-medium px-5'>DASHBOARD</h1>
            <p className='px-5 mt-2 text-teal-400 text-[0.8rem]'>Welcome to your admin dashboard</p>
            <div className='my-5'>
            <StatsCards />
            </div>
            
          </div>
        );
      case 'Manage Users':
        return <EmailsList />;
      case 'Approvals':
        return <div>approvals</div>;
      case 'All transactions':
        return <Transactions />;
      default:
        return (
          <div>
            <h1 className='text-3xl font-medium px-5'>DASHBOARD</h1>
            <p className='px-5 mt-2 text-teal-400 text-[0.8rem]'>Welcome to your admin dashboard</p>
            <EmailsList />
          </div>
        );
    }
  };

  return (
    <div className="flex">
      <AdminBar onMenuClick={setActiveContent} />
      <div className="flex-grow p-6 md:ml-64">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;