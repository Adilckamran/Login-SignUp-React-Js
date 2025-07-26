import React, { useState } from 'react'
import second from '../assets/email.png'
import first from '../assets/password.png'
// import third from '../assets/person.logo'
import './Login.css'
export default function Login() {
        const [action , setAction] = useState("Login")

  return (
   <>
    
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                
                <div className="input">
                    <img src={second} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={first} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up"?<div></div>: <div className="forgot-password">Forgot Password ? <span>Click here!</span></div>}
           
            <div className="submit-container">
               
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>

    </>
    
  )
}


