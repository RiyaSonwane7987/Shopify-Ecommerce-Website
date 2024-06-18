import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign up</h1>
        <div className='loginsign-fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='password' />

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy. </p>
        </div>
      </div>
    </div>
  )
}
