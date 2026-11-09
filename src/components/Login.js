import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () =>{
     setIsSignIn (!isSignIn)
  }
  return (
    <div>
    <Header />
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d8132cba-0024-4b01-86f4-2bac9792e1dd/web/IN-en-20261102-TRIFECTA-perspective_971d7f82-9e80-48cc-aedc-f7bc0e68c14f_large.jpg'
      alt='logo' />
    </div>
    <form className='absolute p-12 bg-black w-3/12 my-60 mx-auto left-0 right-0 h-78 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

    {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 my-4 rounded-md
      w-full bg-gray-700' />}

      <input type='text' placeholder='Email Address' className='p-4 my-4 rounded-md
      w-full bg-gray-700' />

      <input type='text' placeholder='Password' className='p-4 my-4  rounded-md w-full  bg-gray-700' />

      <button type='button' className='p-3 my-8  rounded-lg bg-red-700 w-full'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now.'}</p>
    </form>
    </div>
  )
}

export default Login
