import React, { useEffect, useState } from "react";
import axios from "axios";
import "./editprofile.css";
import { useNavigate } from "react-router-dom";
function Editprofile() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email: "",
    name: "",
    password: "",
  });

  function getUserInfo() {
    try {
      axios({
        method: "get",
        url: "http://127.0.0.1:8000/api/getUser",
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      }).then(function (res) {
        console.log(res);
        if (res.status == 200) {
          setuser(res.data.user);
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((olduser) => ({
      ...olduser,
      [name]: value,
    }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/updateProfile",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: user,
    })
      .then((res) => {
        console.log("Profile updated successfully:", res.data);
        navigate('/homepage');
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div>
      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSaveProfile}>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profile_picture"
            name="profile_picture"
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />

          <button type="submit" className="save">
            Save
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => {
              navigate("/homepage");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editprofile;
