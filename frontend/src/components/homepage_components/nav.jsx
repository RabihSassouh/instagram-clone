import React,{useState} from "react";
import instagram_logo_homepage from "../../assets/imgs/Home/instagram_logo_homepage.png";
import "./nav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import {useNavigate} from "react-router-dom";

const Nav = ({ handleLogout }) => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const navigate=useNavigate();

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
    if(isEditProfileOpen){
      navigate('/editprofile');
    }
  };

  return (
    <div className="nav flex column">
      <img className="nav-logo" src={instagram_logo_homepage} alt="" />
      <div className="nav-buttons flex column">
        <button className="nav-button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="nav-button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="nav-button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="nav-button">
          <TelegramIcon />
          <span>Messages</span>
        </button>

        <button className="nav-button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className="nav-button">
          <AddBoxIcon />
          <span>Create</span>
        </button>

        <button className="nav-button" onClick={handleEditProfileClick}>
          <EditIcon />
          <span>Edit Profile</span>
        </button>

        <div className="nav-logout">
          <button className="nav-button" onClick={handleLogout}>
            <Avatar className="logout-avatar">R</Avatar>
            <span className="logout-button">Log out</span>
          </button>
        </div>
      </div>
      <div className="nav-more">
        <button className="nav-button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};
export default Nav;
