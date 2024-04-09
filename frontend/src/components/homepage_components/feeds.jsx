import React from 'react'
import Follow from './follow';
import './feeds.css';
import Posts from './feeds/posts';
const Feeds = () => {
  return (
    <div className='feeds flex'>
    <div className='feeds-container'>
      <div className="feeds-posts">
        <Posts/>
      </div>
    </div>
    <div className='follow-container'><Follow/></div>
    </div>
  )
}
export default Feeds;