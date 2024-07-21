"use client"
import { useEffect, useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('/api/transaction');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.length === 0 ? (
        <p>No crypto payments made yet</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction._id}>
              {transaction.amount} {transaction.currency} - Status: {transaction.status} - Email: {transaction.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;