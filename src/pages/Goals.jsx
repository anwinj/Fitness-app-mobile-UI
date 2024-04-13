import React from 'react'
import { useNavigate } from 'react-router-dom'

function Goals() {

  const navigate = useNavigate()

  const handleConfirm = ()=>{
    navigate('/tracker')
  }

  return (
    <div className='w-svw h-svh lg:w-96 p-4 flex flex-col justify-between'>
      {/* goals */}
      <div className='flex flex-col'>
        <p className='text-center font-semibold text-xl mt-5'>What are your goals?</p>
        <div className='mt-7 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>Weight Loss</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
        <div className='mt-4 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>Muscle Gain</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
        <div className='mt-4 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>Flexibility and Mobility</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
        <div className='mt-4 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>General Fitness</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
        <div className='mt-4 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>Event - specific training</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
        <div className='mt-4 flex justify-between bg-gray-100 py-4 px-4 rounded-lg'>
          <p className='font-medium'>Mindfulness and Mental Health</p>
          <input type="checkbox" className='w-5 h-5' />
        </div>
      </div>

      {/* button */}
      <div>
        <button onClick={handleConfirm} className='w-full mb-5 py-3 rounded-xl bg-gradient-to-r from-blue1 to-blue2 font-semibold text-slate-50'>Confirm</button>
      </div>
    </div>
  )
}

export default Goals