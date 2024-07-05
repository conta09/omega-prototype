import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

// Sample data
const transactions = [
  { id: 1, date: '2023-06-01', type: 'deposit', amount: 500, description: 'deposit money' },
  { id: 2, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'withdraw money' },
  { id: 3, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'withdraw money' },
  { id: 4, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 5, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'withdraw money' },
  { id: 6, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 7, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 8, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 9, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 10, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 11, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 12, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 13, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },
  { id: 14, date: '2023-06-02', type: 'withdraw', amount: 200, description: 'Grocery shopping' },


  // Add more transactions as needed
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130 },
  { field: 'description', headerName: 'Description', width: 200 },
];

const TransactionHistory = () => {
  return (
    <Container>
      <h2 className='py-4'>Transaction History</h2>
      <div style={{ height: 300, width: '100%', color:'white', }}>
        <DataGrid rows={transactions} columns={columns} pageSize={4}
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
            color: '#fff',
          },
          '& .MuiDataGrid-cell': {
            color: '#fff',
            borderBottom: '1px solid #fff',
          },
          '& .MuiDataGrid-columnHeaders': {
            color:'black',
            borderBottom: '1px solid #fff',
          },
          '& .MuiDataGrid-columnHeaderTitle': {

            color: 'black',
          },
          '& .MuiDataGrid-row': {
          },
          '& .MuiDataGrid-row:nth-of-type(even)': {
            backgroundColor: '#111',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#242424',
            color: '#fff',
          },
        }}
        
        />
      </div>
    </Container>
  );
};

export default TransactionHistory;
