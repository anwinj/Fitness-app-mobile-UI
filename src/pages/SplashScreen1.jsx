import React from 'react'
import SplashImg1 from '../assets/Images/splash_1.png'
import Button1 from '../assets/Images/splash_icon_1.png'
import { Link } from 'react-router-dom'

function SplashScreen1() {
  return (
    <div className='w-svw h-svh lg:w-96 p-3 flex flex-col justify-between'>
      {/* skip */}
      <div>
        <Link to="/register" className='float-right text-blue-400 text-lg underline'>Skip</Link>
      </div>

      {/* image */}
      <div className='flex justify-center'>
        <img src={SplashImg1} alt="Splash Screen Image" />
      </div>

      {/* Text */}
      <div className='p-1'>
        <p className='text-xl font-semibold mb-2'>Track Your Goal</p>
        <p className='leading-5 text-sm line-clamp-3 text-balance text-gray-500'>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
      </div>

      {/* Button */}
      <div>
        <Link to='/splash-2' ><img src={Button1} alt="Button" className='float-right mb-6 me-2' /></Link>
      </div>
    </div>
  )
}

export default SplashScreen1