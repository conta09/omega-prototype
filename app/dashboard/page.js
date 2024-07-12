"use client";
import { useState } from 'react';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import Wallet from '../components/Wallet';
import PaymentHistory from '../components/PaymentHistory';
const Home = () => {
  const [content, setContent] = useState('home');
  const [balance, setBalance] = useState(0); // Add balance state

  const handleDepositClick = () => {
    setContent('wallet');
  };

  const handleWithdrawClick = () => {
    setContent('wallet');
  };

  const updateBalance = (amount, action) => {
    const amountNumber = parseFloat(amount);
    if (action === 'Deposit') {
      setBalance(prevBalance => prevBalance + amountNumber);
    } else if (action === 'Withdraw') {
      setBalance(prevBalance => prevBalance - amountNumber);
    }
  };

  const renderContent = () => {
    switch (content) {
      case 'home':
        return <HomePage />;
      case 'wallet':
        return <Wallet balance={balance} updateBalance={updateBalance} />;
      case 'transactionHistory':
        return <PaymentHistory />;
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
      balance={balance} // Pass balance to Layout
    >
      {renderContent()}
    </Layout>
  );
};

export default Home;
