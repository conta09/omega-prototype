import React from 'react';

const dummyData = [
  { name: 'Bitcoin', date: '15 Jan, 2023', price: '$28,165', status: 'Successfully', amount: '2.3 BTC', change: '-18.68%' },
  { name: 'Ethereum', date: '11 Feb, 2023', price: '$27,554', status: 'Failed', amount: '1.2 BTC', change: '-18.68%' },
  { name: 'Bitcoin', date: '18 Mar, 2023', price: '$26,165', status: 'Successfully', amount: '3.6 BTC', change: '-18.68%' },
  { name: 'Bitcoin', date: '15 Apr, 2023', price: '$26,158', status: 'Pending', amount: '5.7 BTC', change: '-10.36%' },
];

const PaymentHistory = () => {
  return (
    <div className="p-6 rounded-lg md:max-w-screen-sm overflow-x-auto">
      <h2 className="text-white text-lg mb-4">Transaction history</h2>
      <div className="space-y-4 min-w-[26rem]">
        <div className="flex items-center justify-between p-4 rounded-lg">
          <div className="text-gray-400 w-1/5">Name</div>
          <div className="text-gray-400 w-1/5">Date</div>
          <div className="text-gray-400 w-1/5">Status</div>
          <div className="text-gray-400 w-1/5">Amount</div>
        </div>
        {dummyData.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-[#272727] p-4 rounded-lg">
            <div className="flex items-center space-x-4 text-[0.9rem]">
              <div className="bg-black p-2 rounded-full">
                <span className="text-white">{item.name.substring(0, 3)}</span>
              </div>
              <div>
                <div className="text-white">{item.name}</div>
                <div className="text-gray-400">{item.change}</div>
              </div>
            </div>
            <div className="text-gray-400 w-1/5">{item.date}</div>
            <div className="flex items-center space-x-2 ">
              <span className="text-gray-400">{item.status}</span>
            </div>
            <div className="text-white w-1/5">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
