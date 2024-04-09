import React, { useState } from 'react'
import Follow from './follow';
import './feeds.css';
import Posts from './feeds/posts';
const Feeds = () => {
  const [posts,setPosts]= useState([
    {
    user: "rabih",
    postImage: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    likes: 12,
    timestamp:"5h",
    caption: "First post!"
}
])
  return (
    <div className='feeds flex'>
    <div className='feeds-container'>
      <div className="feeds-posts">
      {posts.map((post, index) => (
            <Posts key={index} posts={post} />
          ))}
      </div>
    </div>
    <div className='follow-container'><Follow/></div>
    </div>
  )
}
export default Feeds;