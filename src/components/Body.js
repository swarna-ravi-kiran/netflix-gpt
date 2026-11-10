import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import Header from './Header'

const Body = () => {
 const dispatch = useDispatch();

 const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/header",
        element:<Header />
    },
    {
        path:"/browse",
        element:<Browse />
    },
 ])

useEffect(()=>{
    debugger
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid, email, displayName} = user;
    dispatch(addUser({uid:uid, email:email,  displayName:displayName}))
  } else {
    // User is signed out
    dispatch(removeUser())
  }
}); 
}, [])


  return (
    <RouterProvider router={appRouter}>
    <div>
      <Login />
      <Browse />
    </div>
    </RouterProvider>
  )
}

export default Body
