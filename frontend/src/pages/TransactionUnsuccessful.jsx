import React from 'react';
import { Link } from 'react-router-dom';

const TransactionUnsuccessful = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0ZM12,18a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,18Zm1.4-10.92a.512.512,0,0,0-.38-.16h-2a.51.51,0,0,0-.38.16l-1.4,1.42A.51.51,0,0,0,8.64,9.9h6.72a.51.51,0,0,0,.36-.86Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Transaction Unsuccessful</h3>
          <p className="text-gray-600 my-2">Unfortunately, your payment did not go through.</p>
          <p>Please try again later or contact support if the issue persists.</p>
          <div className="py-10 text-center">
            <Link to="/dashboard" className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3">
              TRY AGAIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionUnsuccessful;
