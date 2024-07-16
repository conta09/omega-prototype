// components/AdminTransactions.js
import { useEffect, useState } from 'react';

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/admin/transactions');
      const data = await response.json();
      if (response.ok) {
        setTransactions(data.transactions);
      } else {
        console.error(data.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.userId.email}</td>
              <td>{transaction.name}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.price}</td>
              <td>{transaction.status}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTransactions;
