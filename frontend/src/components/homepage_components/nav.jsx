import React from "react";
import instagram_logo_homepage from "../../assets/imgs/Home/instagram_logo_homepage.png";
import "./nav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
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
