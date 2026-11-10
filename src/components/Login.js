import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
const [isSignIn, setIsSignIn] = useState(true);
const [errorMessage, setErrorMessage] = useState(null)
const navigate = useNavigate()
const dispatch = useDispatch()

const email = useRef(null); //it will give the reference of the input or any field in the form
const password = useRef(null);

  const toggleSignIn = () =>{
     setIsSignIn (!isSignIn)
  }

  const HandleButtonClick = () =>{
    //validate the form data
    console.log(email.current.value)
    console.log(password.current.value)

   const message =  checkValidate(email.current.value,password.current.value)
   setErrorMessage(message)
   if(message) return
   debugger
   if(!isSignIn){
    //creating a user
   // Sign Up logic (https://firebase.google.com/docs/auth/web/password-auth)
   createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
   .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    //once creation done navigate to browse page
    updateProfile(user, {
  displayName: email.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    const {uid, email, displayName} = auth.currentUser;
        dispatch(addUser({uid:uid, email:email,  displayName:displayName}))
    navigate('/browse')
  }).catch((error) => {
    const errorCode = error.code;
     const errorMessage = error.message;
 setErrorMessage(errorCode +'-'+errorMessage)
});
    console.log(user)
     navigate('/browse')
    
   })
   .catch((error) => {
    const errorCode = error.code;
     const errorMessage = error.message;
     setErrorMessage(errorCode +'-'+errorMessage)
     console.log(message)
    // ..
   });
   }else{
    // Sign In logic
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log(user)
     navigate('/browse')
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +'-'+errorMessage)
     console.log(message)
  });
   }
  }

  return (
    <div>
    <Header />
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/d8132cba-0024-4b01-86f4-2bac9792e1dd/web/IN-en-20261102-TRIFECTA-perspective_971d7f82-9e80-48cc-aedc-f7bc0e68c14f_large.jpg'
      alt='logo' />
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-60 mx-auto left-0 right-0 h-78 text-white rounded-lg bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

    {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 my-4 rounded-md
      w-full bg-gray-700' />}

      <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 rounded-md
      w-full bg-gray-700' />

      <input  ref={password} type='text' placeholder='Password' className='p-4 my-4  rounded-md w-full  bg-gray-700' />
      <p className='text-red-700 font-bold text-lg'>{errorMessage}</p>

      <button type='button' className='p-3 my-8  rounded-lg bg-red-700 w-full' onClick={HandleButtonClick}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now.'}</p>
    </form>
    </div>
  )
}

export default Login
