import React, { useState } from "react";
import instagram_icon from "../assets/imgs/Login/instagram_icon.png";
import Facebook_logo from "../assets/imgs/Login/Facebook_logo.png";
import google_play from "../assets/imgs/Login/google_play.png";
import microsoft_icon from "../assets/imgs/Login/microsoft_icon.png";
import "../styles/commons/utilities.css";
import "../styles/signup.css";

const Signup = ({ onToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-container flex center column full-width">
      <div className="contianer1">
        <div className="container1-logo">
          <img src={instagram_icon} alt="" className="instagram-icon" />
        </div>
        <div className="flex center">
          <p className="container1-text ">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="fb-login flex center">
          <span>
            <img src={Facebook_logo} alt="" className="facebook_logo" />
          </span>
          <p className="fb-link">Log in with Facebook</p>
        </div>
        <div className="lines-or flex center full-width">
          <div className="line1"></div>
          <div className="or">OR</div>
          <div className="line2"></div>
        </div>
        <div className="container1-input">
          <input
            type="text"
            placeholder="Phone Number or Email"
            onChange={(e) => setEmail(e.target)}
            value={email}
          />
        </div>
        <div className="container1-input">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target)}
            value={name}
          />
        </div>
        <div className="container1-input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target)}
            value={username}
          />
        </div>
        <div className="container1-input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target)}
            value={password}
          />
        </div>
        <div className="container1-terms">
          <p className="terms">
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </p>
        </div>
        <div className="contianer1-signup">
          <button className="signup-button">Sign up</button>
        </div>
      </div>
      <div className="container2 flex center">
        <p>
          Have an account?{" "}
          <span onClick={onToggle} className="login">
            Log in
          </span>
        </p>
      </div>
      <div className="container3 flex center">
        <p>Get the app.</p>
      </div>
      <div className="container4 flex center">
        <img src={google_play} alt="" className="google_play-logo" />
        <img src={microsoft_icon} alt="" className="microsoft_icon-logo" />
      </div>
    </div>
  );
};

export default Signup;
