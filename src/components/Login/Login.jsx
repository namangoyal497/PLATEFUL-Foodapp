import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
const LoginPage = ({setShowLogin}) => {
  const navigate = useNavigate();
    const [currState,setCurrState]=useState("Login")
    
   useEffect(()=>{
    setShowLogin(true);
   })
  return (
    <div className='login'>
     <form className='login-container'>
        <div className='title'>
            <h2>{currState}</h2>
        </div>
        <div className='login-input'>
            {currState==="Login"?<></>:<input type="text"placeholder='Your Name' required/>}
            
            <input type="email"placeholder='Your Email' required/>
            <input type="password"placeholder='password' required/>
        </div>
        <button onClick={() => {
  navigate('/'); // Redirect to the root path
  // setShowLogin(false); // Close the login modal (if applicable)
}}>
  {currState === "Sign Up" ? "Create account" : "Login"}
</button>
         <div className='login-conditon'>
            <input type="checkbox" required/>
            <p>By Continuing , I agree to the terms of use & privacy policy</p>
         </div>
         {currState==="Login"?
         <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
         :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p> 
        }
         
     </form>
    </div>
  )
}

export default LoginPage