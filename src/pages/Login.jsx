import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '../assets/Images/google.png'
import FacebookIcon from '../assets/Images/facebook.png'
import EyeIcon from '../assets/Images/eye-off.png'

function Login() {

  const navigate = useNavigate()

  const handleLogin = ()=>{
    navigate('/tracker')
  }

  return (
    <div className='w-svw h-svh lg:w-96 p-4 flex flex-col justify-between'>
      {/* form */}
      <div className='flex flex-col pt-4'>
        <p className='text-xl font-semibold'>Welcome Back</p>
        <form className='mt-8 flex flex-col'>
          <input type="text" placeholder='Email' className='bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl placeholder:text-gray-600' />
          <div className='relative'>
            <input type="password" placeholder='Password' className=' w-full bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl mt-5 placeholder:text-gray-600' />
            <img src={EyeIcon} className='absolute bottom-4 right-5' alt="eye icon" />
          </div>
        </form>
        <p className='text-xs underline underline-offset-2 mt-3 ms-2 text-gray-500'>Forgot your password?</p>
      </div>

      {/* button */}
      <div className='flex flex-col'>
        <button  onClick={handleLogin} className='py-3 rounded-xl bg-gradient-to-r from-blue1 to-blue2 font-semibold text-slate-50'>Sign In</button>
        <div className='flex justify-center items-center'>
          <hr className="w-full h-px my-8 bg-gray-400 border-0" />
          <span className="absolute px-3 text-sm font-medium bg-white">Or</span>
        </div>
        <div className='flex justify-center'>
          <button className='border p-3 w-12 border-gray-400 rounded-lg'><img src={GoogleIcon} alt="google icon" /></button>
          <button className='ms-5 border p-3 w-12 flex justify-center border-gray-400 rounded-lg'><img src={FacebookIcon} alt="fb icon" /></button>
        </div>
        <p className='text-center text-sm mt-3 mb-1 underline '>Don't have an account yet? <Link to='/register' className='text-blue-400 '>Create an account</Link></p>
      </div>
    </div>
  )
}

export default Login