import React from 'react'
import './Demoplus.css'
import assets from '../../assets/assets'

const Demoplus = () => {
  return (
    <div className='demo'>
        <div className="container">
            <div className="logo">
                <img src={assets.logo} alt="" />
            </div>
            <div className="form">
                <form>
                  <h1>Sign Up</h1>
                  <input type="text" placeholder='username' required/>
                  <input type="email" placeholder='Email Address' required />
                  <input type="password" placeholder='password' required/>
                  <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Demoplus