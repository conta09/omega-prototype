import React from 'react';
import AdminBar from '../components/AdminBar';

function App() {
  return (
    <div className="flex">
     <AdminBar />
      <div className="flex-grow p-6">
        {/* Main content goes here */}
        <h1 className='text-3xl font-medium px-5'>DASHBOARD</h1>
        <p className='px-5 mt-2 text-teal-400 text-[0.8rem]'>Welcome to your admin dashboard</p>
      </div>
    </div>
  );
}

export default App;
