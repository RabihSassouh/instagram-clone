import React from "react";
import "./posts.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Posts({ posts }) {
  const { user, postImage, likes, timestamp } = posts;
  return (
    <div className="post">
      <div className="post-header flex">
        <div className="post-user flex">
          <Avatar className="avatar">R</Avatar>
          {user}
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-image">
        <img src={postImage} alt="" />
      </div>
      <div className="post-footer-container">
        <div className="post-footer flex">
          <div className="post-footer-Icons">
            <FavoriteBorderIcon className="post-icon" />
            <ChatBubbleOutlineIcon className="post-icon" />
            <ShareIcon className="post-icon" />
          </div>
          <div className="post-footer-saveIcon">
            <BookmarkBorderIcon className="post-icon" />
          </div>
        </div>
        Liked by {likes}
      </div>
      <div className="timestamp">
        <span>{timestamp} ago</span>
      </div>
    </div>
  );
}

export default Posts;
