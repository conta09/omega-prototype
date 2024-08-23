import Image from "next/image";

const DepositCrypto = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg text-black max-w-sm">
      <div className="flex justify-center my-6">
        <Image
          src="/omega-dark.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Deposit Address</h3>
      <div className="bg-gray-100 p-3 rounded-md mb-5 shadow-inner">
        <p className="text-sm text-gray-600 mb-2">Send your funds to the following address:</p>
        <p className="font-mono text-base text-gray-800 bg-gray-200 p-2 rounded-md break-all">
          TLvnqtD3btcYN9fXFPMHHsZt7bnudbHmnD
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h4>
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
