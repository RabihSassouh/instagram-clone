import React from 'react';
import "./follow.css";
import { Avatar } from "@mui/material";

const Follow = () => {
  return (
    <div className='follow'>
      <div className="follow-header">Suggestions for you</div>
      <div className="follow-users">
        <div className="follow-user flex">
          <div className="follow-user-left flex">
            <span className='avatar'><Avatar>R</Avatar></span>
            <div className='user-info flex column'>
              <span className='user-name'>rabih</span>
              <span className='relation'>followed by x</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Follow;