import React from 'react'
import HomeIcon from '../assets/Images/home.png'
import TrackerIcon from '../assets/Images/tracker.png'
import SearchIcon from '../assets/Images/search.png'
import CameraIcon from '../assets/Images/camera.png'
import UserIcon from '../assets/Images/user.png'
import BackICon from '../assets/Images/back.png'
import PlusIcon from '../assets/Images/plus.png'
import { Link } from 'react-router-dom'

function WorkoutSchedule() {
  return (
    <div className='w-svw h-svh lg:w-96 flex flex-col justify-between mb-40'>
      {/* schedule details */}
      <div>
        <div className='flex justify-between items-baseline p-4'>
          <button className='bg-gray-100 rounded p-2'><img src={BackICon} alt="back icon" /></button>
          <p className='font-semibold text-xl mt-5'>Workout Schedule</p>
          <div></div>
        </div>
        <p className='text-center text-sm font-semibold mt-3'>&lt; Feb 2024 &gt;</p>
        <div className="flex justify-evenly items-center mt-5">
          <div className='bg-gray-50 flex flex-col justify-center items-center p-4 rounded-xl'>
            <p className='text-sm'>Sun</p>
            <p className='text-3xl font-semibold'>5</p>
          </div>
          <div className='bg-gradient-to-r from-blue3 to-blue2  flex flex-col justify-center items-center p-4 rounded-xl text-white'>
            <p className='text-sm'>Mon</p>
            <p className='text-3xl font-semibold'>6</p>
          </div>
          <div className='bg-gray-50 flex flex-col justify-center items-center p-4 rounded-xl'>
            <p className='text-sm'>Tue</p>
            <p className='text-3xl font-semibold'>7</p>
          </div>
          <div className='bg-gray-50 flex flex-col justify-center items-center p-4 rounded-xl'>
            <p className='text-sm'>Wed</p>
            <p className='text-3xl font-semibold'>8</p>
          </div>
          <div className='bg-gray-50 flex flex-col justify-center items-center p-4 rounded-xl'>
            <p className='text-sm'>Thu</p>
            <p className='text-3xl font-semibold'>9</p>
          </div>
        </div>

        {/* schedule */}
        <div className='mt-5 relative'>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>06:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>07:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>08:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <div className='flex justify-between items-center me-12'>
              <p className='text-sm font-medium ms-4 mb-2'>09:00 AM</p>
              <p className='bg-fuchsia-300 text-sm px-3 rounded-xl'>Ab Workout, 9am</p>
            </div>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>10:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>11:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>12:00 AM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>01:00 PM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <div className='flex justify-between items-center me-12'>
              <p className='text-sm font-medium ms-4 mb-2'>02:00 PM</p>
              <p className='bg-gray-50 text-sm px-3 rounded-xl'>Lowerbody Workout, 3pm</p>
            </div>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>03:00 PM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>04:00 PM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>05:00 PM</p>
            <hr className='border-1'/>
          </div>
          <div className='mb-2'>
            <p className='text-sm font-medium ms-4 mb-2'>06:00 PM</p>
            <hr className='border-1'/>
          </div>
          <div className='bg-fuchsia-300 rounded-full p-5 shadow-lg absolute bottom-0 right-5'>
            <img src={PlusIcon} alt="plus icon" />
          </div>
        </div>
      </div>

      {/* navigation menu */}
      <div className='w-96 fixed bottom-0 left-0 bg-white px-6 py-5'>
        <div className='flex justify-between'>
          <Link to='/tracker'><img src={HomeIcon} alt="home icon" /></Link>
          <Link to='/schedule'><img src={TrackerIcon} alt="tracker icon" /></Link>
          <div></div>
          <img src={CameraIcon} alt="camera icon" />
          <img src={UserIcon} alt="user icon" />
        </div>
        <div className='absolute -top-6 left-44 p-4 rounded-full shadow-lg bg-gradient-to-r from-blue3 to-blue2'>
          <img src={SearchIcon} alt="user icon" />
        </div>
      </div>
    </div>
  )
}

export default WorkoutSchedule