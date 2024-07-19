// components/StatsCards.js
"use client"
import { useState, useEffect } from 'react';

const StatsCards = () => {
  const [stats, setStats] = useState({
    claimable: 0,
    totalAssets: 0,
  });

  // Function to fetch data from the database
  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats'); // Replace with your API endpoint
      const data = await response.json();

      setStats({
        claimable: data.claimable,
        totalAssets: data.totalAssets,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="lg:flex justify-around  py-4">
      
      <div className="bg-[#1E1E1E] text-white rounded-lg shadow-lg p-4 my-4  lg:w-1/2 mx-2 text-center">
        <div className="text-lg text-[#605f5f]">Total tokens</div>
        <div className="text-2xl font-bold">${stats.claimable.toFixed(2)}</div>
      </div>
      <div className="bg-[#1E1E1E] text-white rounded-lg shadow-lg p-4 my-4 lg:w-1/2 mx-2 text-center">
        <div className="text-lg text-[#605f5f]">Available balance</div>
        <div className="text-2xl font-bold">${stats.totalAssets.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default StatsCards;
