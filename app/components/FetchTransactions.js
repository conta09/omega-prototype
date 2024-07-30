"use client"
import { useEffect, useState } from 'react';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch('/api/fetchTransactions');
        const data = await response.json();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
        setLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (transactions.length === 0) {
    return <div>No transactions done</div>;
  }

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction._id}>
            <p>User ID/Email: {transaction.userId}</p>
            <p>Transaction ID: {transaction.chargeId}</p>
            <p>Amount: {transaction.amount} {transaction.currency}</p>
            <p>Status: {transaction.status}</p>
            <p>Confirmed At: {new Date(transaction.confirmedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
