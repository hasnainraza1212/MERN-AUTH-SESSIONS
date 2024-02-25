import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({data, handleLogout=()=>{}, }) => {
   const isLogout = useMemo(()=>{
    if (localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"))?true:false
    }
   },[])
   useEffect(()=>{
    console.log(isLogout)
   },[])
  return (
   <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
    <h1>
        hasnain
    </h1>
    {
        isLogout?
        <button onClick={handleLogout} style={{cursor:"pointer"}}>
        sign out
    </button>
    :<></>
    }
   
   </div>
  )
}

export default Header