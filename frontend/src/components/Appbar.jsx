import React from 'react'

const Appbar = () => {
    const name = localStorage.getItem("name")
    
  return (
    <div className='shadow h-14 flex justify-between'>
        <div className='flex flex-col justify-center h-full ml-4 font-semibold'>
            PayBYDay App
        </div>
        <div className='flex'>
            <div className='flex flex-col justify-center h-full mr-4 font-serif '>
                Welcome
            </div>
            <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
                <div className='flex flex-col justify-center h-full text-xl font-serif'>
                    {name[0]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appbar