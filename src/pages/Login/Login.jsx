import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup } from '../../config/firebase'

const Login = () => {

const [currState, setcurrState] = useState("Sign Up");
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const onSubmitHandler = (event)=>{
  event.preventDefault();
  if(currState === "Sign Up"){
    signup(userName,email,password);
  }
}

  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className="logo" />
        <form onSubmit={onSubmitHandler} className="login-form">
          <h2>{currState}</h2>
          {currState === "Sign Up"?<input type="text" onChange={(e)=>setUserName(e.target.value)} className="form-input" value={userName} placeholder='username' required/>:null}
          <input type="email" className="form-input" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email Address' required/>
          <input type="password" className="form-input" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' required/>
          <button type='submit'>{currState === "Sign Up"?"Create Account":"Log in"}</button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
          <div className="login-forgot">
            {
              currState === "Sign Up"?
              <p className="login-toggle">Already have an account? <span onClick={()=>setcurrState("Log in")}>Log in</span></p>
              :<p className="login-toggle">Don't have an account? <span onClick={()=>setcurrState("Sign Up")}>Sign up</span></p>
            } 
          </div>
        </form>
    </div>
  )
}

export default Login