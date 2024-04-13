import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '../assets/Images/google.png'
import FacebookIcon from '../assets/Images/facebook.png'


function Register() {

  const navigate = useNavigate()

  const handleRegister = ()=>{
    navigate('/goals')
  }

  return (
    <div className='w-svw h-svh lg:w-96 p-4 flex flex-col justify-between'>
      {/* form */}
      <div className='flex flex-col pt-4'>
        <p className='text-xl font-semibold'>Create an account</p>
        <form className='mt-8 flex flex-col'>
          <input type="text" placeholder='First Name' className='bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl placeholder:text-gray-600' />
          <input type="text" placeholder='Last Name' className='bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl mt-5 placeholder:text-gray-600' />
          <input type="text" placeholder='Email' className='bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl mt-5 placeholder:text-gray-600' />
          <input type="text" placeholder='Password' className='bg-gray-100 px-5 text-xs font-medium py-5 rounded-xl mt-5 placeholder:text-gray-600' />
        </form>
        <div className='mt-6 px-2 flex items-center'>
          <input type="checkbox" className='w-5 h-5' />
          <p className='text-xs ms-2'>By proceeding, I agree to all <Link className='text-blue-400 underline'>T&C</Link> and  <Link className='text-blue-400 underline'>Privacy Policy</Link></p>
        </div>
      </div>

      {/* button */}
      <div className='flex flex-col'>
        <button onClick={handleRegister} className='py-3 rounded-xl bg-gradient-to-r from-blue1 to-blue2 font-semibold text-slate-50'>Create an Account</button>
        <div className='flex justify-center items-center'>
          <hr className="w-full h-px my-8 bg-gray-400 border-0" />
          <span className="absolute px-3 text-sm font-medium bg-white">Or</span>
        </div>
        <div className='flex justify-center'>
          <button className='border p-3 w-12 border-gray-400 rounded-lg'><img src={GoogleIcon} alt="google icon" /></button>
          <button className='ms-5 border p-3 w-12 flex justify-center border-gray-400 rounded-lg'><img src={FacebookIcon} alt="fb icon" /></button>
        </div>
        <p className='text-center text-sm mt-3 mb-1'>Already have an account? <Link to='/login' className='text-blue-400 underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register