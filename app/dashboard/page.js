"use client"
import Layout from '../components/Layout';
import { useState } from 'react';
import HomePage from '../components/HomePage';
import Wallet from '../components/Wallet';

const Home = () => {
  const [content, setContent] = useState('home');

  const handleDepositClick = () => {
    // Implement deposit logic here
    console.log('Deposit clicked');
  };

  const handleWithdrawClick = () => {
    // Implement withdraw logic here
    console.log('Withdraw clicked');
  };

  const renderContent = () => {
    switch(content) {
      case 'home':
        return <HomePage />;
      case 'wallet':
        return <Wallet />;
      case 'transactionHistory':
        return <div>Transaction History Content</div>;
      case 'referrals':
        return <div>Referrals Content</div>;
      default:
        return <div>Home Content</div>;
    }
  };

  return (
    <Layout
      setContent={setContent}
      handleDepositClick={handleDepositClick}
      handleWithdrawClick={handleWithdrawClick}
    >
      {renderContent()}
    </Layout>
  );
};

export default Home;
