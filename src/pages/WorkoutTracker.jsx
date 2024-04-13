import React from 'react'
import HomeIcon from '../assets/Images/home.png'
import TrackerIcon from '../assets/Images/tracker.png'
import SearchIcon from '../assets/Images/search.png'
import CameraIcon from '../assets/Images/camera.png'
import UserIcon from '../assets/Images/user.png'
import BackICon from '../assets/Images/back.png'
import Chart from '../assets/Images/chart.png'
import AlertTriangle from '../assets/Images/triangle.png'
import WorkoutImg1 from '../assets/Images/workout-1.png'
import WorkoutImg2 from '../assets/Images/workout-2.png'
import WorkoutImg3 from '../assets/Images/workout-3.png'
import { Link } from 'react-router-dom'

function WorkoutTracker() {
  return (
    <div className='w-svw h-svh lg:w-96 p-4 mb-40'>
      {/* tracker details */}
      <div>
        <div className='flex justify-between items-baseline'>
          <button className='bg-gray-100 rounded p-2'><img src={BackICon} alt="back icon" /></button>
          <p className='font-semibold text-xl mt-5'>Workout Tracker</p>
          <div></div>
        </div>
        <img src={Chart} className='mt-14 w-full' alt="chart" />
        <div className='flex justify-between items-center border border-gray-100 mt-4 p-3 rounded-lg bg-gradient-to-r from-blue3 to-white'>
          <img src={AlertTriangle} alt="" />
          <p className='text-sm ms-3'>You've burned fewer calories than yesterday. Time to get moving! </p>
          <div></div>
        </div>
        <div className='flex justify-between items-center mt-5'>
          <p className='text-lg font-semibold'>Upcoming Workout</p>
          <p className='text-xs text-gray-400'>See more</p>
        </div>
        {/* workout cards */}
        <div className='shadow-lg flex justify-between mt-4 rounded-xl px-3 py-4'>
          <div className='flex items-center'>
            <img src={WorkoutImg1} alt="" />
            <div className='flex flex-col ms-3'>
              <p className='text-sm font-medium'>Full Body Workout</p>
              <p className='text-xs mt-1 text-gray-400'>Today 3pm</p>
            </div>
          </div>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-10 h-5 flex px-1 py-2 items-center rounded-full duration-300 ease-in-out bg-blue2 after:w-4 after:h-4 after:bg-white after:rounded-full  after:duration-300 peer-checked:after:translate-x-4"></span>
          </label>
        </div>

        <div className='shadow-lg flex justify-between mt-4 rounded-xl px-3 py-4'>
          <div className='flex items-center'>
            <img src={WorkoutImg2} alt="" />
            <div className='flex flex-col ms-3'>
              <p className='text-sm font-medium'>Upper Body Workout</p>
              <p className='text-xs mt-1 text-gray-400'>4 Feb, 3:30 pm</p>
            </div>
          </div>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-10 h-5 flex px-1 py-2 items-center rounded-full duration-300 ease-in-out bg-blue2 after:w-4 after:h-4 after:bg-white after:rounded-full  after:duration-300 peer-checked:after:translate-x-4"></span>
          </label>
        </div>

        {/* what to train */}
        <div className='mt-5'>
          <p className='text-lg font-semibold'>What Do You Want to Train</p>
          <div className='flex justify-between items-center p-2 rounded-xl mt-3' style={{backgroundColor: 'rgba(140,177,255, 0.6)'}}>
            <div className='px-4'>
              <p className='text-sm font-medium'>Full Body Workout</p>
              <p className='text-xs font-medium mt-2'>Arms</p>
              <p className='text-xs font-medium mt-1'>Chest</p>
              <p className='text-xs font-medium mt-1'>Legs</p>
            </div>
            <img src={WorkoutImg3} alt="workout image" />
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

export default WorkoutTracker