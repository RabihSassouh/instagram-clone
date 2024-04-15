import React, { useEffect, useState } from "react";
import Follow from "./follow";
import "./feeds.css";
import Posts from "./feeds/posts";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Feeds = () => {
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostCaption, setNewPostCaption] = useState("");
  // const [NewPostImagePreview,setNewPostImagePreview]=useState();
  const [comment, setComment] = useState("");
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
  const handlePost = async () => {
    try {
      if (!newPostImage) {
        toast.error("Please upload an image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", newPostImage);
      formData.append("caption", newPostCaption);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/createPost",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 200) {
        console.log("Posted successfully");
        setPosts([...posts, response.data.post]);
        setNewPostCaption("");
        setNewPostImage("");
        toast.success("Posted Successfully");
      } else {
        console.error("Error creating post", response.status);
        toast.error("Error, please try again.");
      }
    } catch (error) {
      console.error("Error creating post", error);
      toast.error("Error, please try again.");
    }
  };

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    setNewPostImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {};

      reader.readAsDataURL(file);
    }
  };

  const handleCaptionChange = (e) => {
    setNewPostCaption(e.target.value);
  };

  const getAllPosts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/Posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      });
      if (!response.data) {
        console.log("error loading");
      }

      const { data } = response;
      console.log(data);
      setPosts([...posts,...data.posts]);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);


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
        <Follow />
      </div>
    </div>
  );
};
export default Feeds;
