import React from 'react'
import { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" placeholder='Your name' required />
                    }
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your Password' required />
                    <button>{currentState === 'Sign Up' ? "Create Account" : "Login"}</button>
                    <div className="login-popup-condition">
                        <input type="checkbox" required/>
                        <p>By continuing , I agree to the terms of use & privacy policy</p>
                    </div>
                    {currentState === 'Login' ? <p>
                        Create a new Account? <span onClick={()=> setCurrentState("Sign Up")}>Click here</span>
                    </p> : <p>Already have an account?<span onClick={()=> setCurrentState("Login")}>Login</span></p>}
                    
                    
                </div>
            </form>
        </div>
    )
}

export default LoginPopUp
