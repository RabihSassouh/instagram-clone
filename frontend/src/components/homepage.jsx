import React from'react'
import Feeds from './homepage_components/feeds';
import Nav from './homepage_components/nav';
import '../styles/homepage.css';
import '../styles/commons/colors.css';
import '../styles/commons/utilities.css';


const Homepage = () => {
  return (
    <div className='homepage flex'>
      <div className='homepage_nav'><Nav/></div>
      <div className='homepage_feeds'><Feeds/></div>
    </div>
  )
}

export default Homepage;