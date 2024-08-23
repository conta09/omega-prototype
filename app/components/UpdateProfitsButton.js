import React, { useState } from 'react';

const UpdateProfitsButton = () => {
  const [status, setStatus] = useState('');

  const handleUpdateProfits = async () => {
    setStatus('Updating...');

    try {
      const response = await fetch('/api/updateProfits', {
        method: 'POST',
      });

      if (response.ok) {
        setStatus('Updated');
      } else {
        setStatus('Failed to update');
      }
    } catch (error) {
      console.error('Error updating profits:', error);
      setStatus('Failed to update');
    }
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={handleUpdateProfits}
        className="bg-[#BFD48A] text-black font-semibold py-2 px-4 rounded"
      >
        Update Profits
      </button>
      {status && <p className="mt-4 text-white">{status}</p>}
    </div>
  );
};

export default UpdateProfitsButton;
