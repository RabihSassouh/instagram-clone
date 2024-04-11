import React from'react'
import Feeds from './homepage_components/feeds';
import Nav from './homepage_components/nav';
import '../styles/homepage.css';
import '../styles/commons/colors.css';
import '../styles/commons/utilities.css';
import {useNavigate} from "react-router-dom";

const Homepage = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  
  return (
    <div className='homepage flex'>
      <div className='homepage_nav'><Nav handleLogout={handleLogout} /></div>
      <div className='homepage_feeds'><Feeds/></div>
    </div>
  )
}

export default Homepage;