import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Balance = ({value = 0}) => {
  const [balance, setBalance] = useState(value);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('https://paybyday-backend.onrender.com/api/v1/account/balance', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
        setBalance(response.data.balance); 
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);
  return (
    <div className=' flex'>
        <div className='font-bold text-lg'>
            Your balance
        </div>
        <div className='font-semibold ml-4 text-lg'>
            Rs {balance.toFixed(2)}
        </div>
    </div>
  )
}

export default Balance