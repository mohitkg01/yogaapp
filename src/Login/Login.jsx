import React from 'react'
import '../Styles/Login.css'
const Login = () => {
  return (
    <div className="login">
        <div className="name">
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='password' />
            <button >Login</button>
        </div>
        <div className='lower'> 
            <a href="">Sign Up</a>
            <a href="">Forgot Password</a>
        </div>
    </div>
  )
}

export default Login