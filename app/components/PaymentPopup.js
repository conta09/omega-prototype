import React from 'react';

const PaymentPopup = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center p-5">
      <div className="bg-white p-6 rounded-xl shadow-md text-center sm:max-w-[16rem] lg:max-w-[27rem] ">
        <div className="mb-4 items-center">
          <h2 className="text-lg font-semibold mb-2 text-black">SUCCESS</h2>
          <p className="text-sm text-gray-700 mb-4">
            To request deposit funds or withdraw. Please approve payment by following the steps and approve after making the transaction.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-base font-semibold mb-2 text-black">Steps to make payment by MoMo</h3>
            <ol className="list-decimal list-inside text-left text-gray-700">
              <li>Copy the number below: <strong>078888888773</strong></li>
              <li>Send the amount of money to this number.</li>
              <li>Take a screenshot of the transaction and send it to WhatsApp: <strong>078888888773</strong></li>
              <li>Await for admin approval, this may take a few moments.</li>
            </ol>
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <button onClick={() => window.location.href = '/'} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            Proceed
          </button>
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
