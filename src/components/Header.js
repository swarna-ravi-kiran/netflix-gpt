import React from "react";
 import { signOut } from "firebase/auth";
 import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header =  () =>{
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user)

    const HandleSignOut = ()=>{
        debugger
        signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
   })
   .catch((error) => {
    navigate('/error')
   // An error happened.
   });
    }

    return(
        <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
           <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAchJje9GUBJ_ehbO0uOApH8QmRyuvK0LQI9obzFeGtfkpfLyh4FdolMZR4PtvyNoOomDcY7BzTbhFC3gJinH0UadYBg807AKDSPyfsUDm9T3CZKn9OSZN3II7060MZESFcb6YOS9jvzh.svg"
           alt="logo" className="w-44"/>
          {user && <div className="flex p-2">
            <img src="https://www.guidingtech.com/wp-content/uploads//How-to-Sign-Out-of-Netflix_1-1536x864.jpg" alt ="usericon" className="w-20"/>
            <button className="text-white font-bold" onClick={HandleSignOut}>(Sign Out)</button>
           </div>}
        </div>
    )
}

export default Header