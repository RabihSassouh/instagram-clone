import React, { useState } from "react";
import Follow from "./follow";
import "./feeds.css";
import Posts from "./feeds/posts";
import axios from "axios";

const Feeds = () => {
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostCaption, setNewPostCaption] = useState("");
  const [posts, setPosts] = useState([
    {
      user: "rabih",
      postImage:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      likes: 12,
      timestamp: "5h",
      caption: "First post!",
    },
  ]);

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setNewPostImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    setNewPostCaption(e.target.value);
  };

  const handlePost = () => {
    try {
      const formData = new FormData();
      formData.append("caption", newPostCaption);
      formData.append("image", newPostImage);
      axios
        .post("http://127.0.0.1:8000/api/createPost", formData, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
          // setPosts([...posts,response.data.post]);
          setNewPostImage(null);
          setNewPostCaption("");
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="feeds flex">
      <div>
        <div className="new-post">
          <input type="file" onChange={handlePostImageChange} />
          <input
            type="text"
            placeholder="Write a caption"
            value={newPostCaption}
            onChange={handleCaptionChange}
          />
          <button onClick={handlePost}>Post</button>
        </div>
        <div className="feeds-container">
          <div className="feeds-posts">
            {posts.map((post, index) => (
              <Posts key={index} posts={post} />
            ))}
          </div>
        </div>
      </div>
      <div className="follow-container">
        <Follow/>
      </div>
    </div>
  );
};
export default Feeds;
