import React, { useEffect, useState } from "react";
import axios from "axios";
import "./editprofile.css";

function Editprofile() {
  const [user, setuser] = useState("");
//   const [profilePicture, setProfilePicture] = useState(null);

  function getUserInfo() {
    try{
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
}catch(error){
    console.log('error', error);
}
  }
  useEffect(() => {
    getUserInfo();
  }, []);


//   const handleProfilePictureChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   const handleSaveProfile = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("profile_picture", profilePicture);

//     axios({
//       method: "post",
//       url: "http://127.0.0.1:8000/api/updateProfilePicture",
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: "Bearer " + window.localStorage.getItem("token"),
//       },
//       data: formData,
//     })
//       .then((res) => {
//         console.log("Profile picture updated successfully:", res.data);
//       })
//       .catch((error) => {
//         console.error("Error updating profile picture:", error);
//       });
//   };

  // const handleSaveProfile = () => {
  //     // Logic to save profile changes
  //     setIsEditProfileOpen(false);
  //   };

  //   const handleCancelEdit = () => {
  //     // Logic to cancel profile editing
  //     setIsEditProfileOpen(false);
  //   };

  return (
    <div>
      <div>
        <h2>Edit Profile</h2>
        <form>
          {/* <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleProfilePictureChange}
          /> */}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
          />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" defaultValue={user.name} />

          {/* <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          defaultValue={user.username}
        /> */}

          {/* <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={user.password}
        /> */}

          <button type="submit" className="save" >
            Save
          </button>
          <button type="button" className="cancel">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editprofile;
