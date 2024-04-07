import React from 'react'
import instagram_icon from "../assets/imgs/Login/instagram_icon.png";
import Facebook_logo from "../assets/imgs/Login/Facebook_logo.png";
import google_play from "../assets/imgs/Login/google_play.png";
import microsoft_icon from "../assets/imgs/Login/microsoft_icon.png";
import "../styles/commons/utilities.css";
import "../styles/login.css";

const Login = () => {
  return (
    <div className='login-container flex center column full-width'>
        <div className='contianer1'>
            <div className='container1-logo'>
                    <img src={instagram_icon} alt="" className='instagram-icon'/>
            </div>
            <div className='container1-input'>
                <input type="text" placeholder='Phone number, username, or email' />
            </div>
            <div className='container1-input'>
                <input type="password" placeholder='Password' /> 
            </div>
            <div className='contianer1-login'>
                    <button className='login-button'>Login</button>
            </div>
            <div className='lines-or flex center full-width'>
                <div className='line1'></div>
                <div className='or'>OR</div>
                <div className='line2'></div>
            </div>
            <div className='fb-login flex center'>
                    <span>
                        <img src={Facebook_logo} alt="" className='facebook_logo' />
                    </span>
                    <p className='fb-link'>Log in with Facebook</p>
            </div>
            <div className='container1-forgot-password'>
                    <p className='forgot-password'>Forgotpassword?</p>
            </div>
        </div>
        <div className='container2 flex center'>
            <p>Don't have an account? <span className='signup'>Sign up</span></p>
        </div>
        <div className='container3'>
            <p>Get the app.</p>
        </div>
        <div className='container4 flex center'>
            <img src={google_play} alt="" className='google_play-logo' />
            <img src={microsoft_icon} alt="" className='microsoft_icon-logo' />
        </div>

    </div>
  )
}

export default Login