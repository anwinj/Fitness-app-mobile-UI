import React from 'react'
import SplashImg2 from '../assets/Images/splash_2.png'
import Button2 from '../assets/Images/splash_icon_2.png'
import { Link } from 'react-router-dom'

function SplashScreen2() {
  return (
    <div className='w-svw h-svh lg:w-96 p-3 flex flex-col justify-between'>
      {/* skip */}
      <div>
        <Link to="/register" className='float-right text-blue-400 text-lg underline'>Skip</Link>
      </div>

      {/* image */}
      <div className='flex justify-center'>
        <img src={SplashImg2} alt="Splash Screen Image" />
      </div>

      {/* Text */}
      <div className='p-1'>
        <p className='text-xl font-semibold mb-2'>Get Burn</p>
        <p className='leading-5 text-sm line-clamp-3 text-gray-500'>Let's keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
      </div>

      {/* Button */}
      <div>
        <Link to='/register' ><img src={Button2} alt="Button" className='float-right mb-6 me-2' /></Link>
      </div>
    </div>
  )
}

export default SplashScreen2