import React from 'react'
import Follow from './follow';
import './feeds.css';
const Feeds = () => {
  return (
    <div className='feeds flex'>
    <div className='feeds_container'>feeds</div>
    <div className='follow_container'><Follow/></div>
    </div>
  )
}
export default Feeds;