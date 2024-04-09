import React from "react";
import "./posts.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Posts() {
  return (
    <div className="post">
      <div className="post-header flex">
        <div className="post-user flex">
          <Avatar>R</Avatar>
          rabih_ . <span>12h</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-image">
        <img
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt=""
        />
      </div>
      <div className="post-footer-container">
        <div className="post-footer flex">
          <div className="post-footer-Icons">
            <FavoriteBorderIcon className="post-icon"/>
            <ChatBubbleOutlineIcon className="post-icon"/>
            <ShareIcon className="post-icon"/>
          </div>
          <div className="post-footer-saveIcon">
            <BookmarkBorderIcon className="post-icon"/>
          </div>
        </div>
        Liked by x
      </div>
    </div>
  );
}

export default Posts;
