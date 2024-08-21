const DepositCrypto = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl text-black max-w-lg ">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Deposit Address</h3>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-600 mb-2">Send your funds to the following address:</p>
        <p className="font-mono text-lg text-gray-800 bg-gray-200 p-2 rounded-lg">
          TLvnqtD3btcYN9fXFPMHHsZt7bnudbHmnD
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-3">Instructions:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ensure you are sending the correct cryptocurrency to this address.</li>
          <li>Double-check the address before confirming the transaction.</li>
          <li>Contact support if you encounter any issues.</li>
        </ul>
      </div>
    </div>
  );
};

export default DepositCrypto;
