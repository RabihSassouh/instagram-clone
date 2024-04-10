import React, { useState } from "react";
import Login from "./login";
import "../styles/commons/utilities.css";
import "../styles/authentication.css";
import Signup from "./signup";

function Authentication() {
  const [show, setShow] = useState("login");
  const handleChange = () => {
    setShow(show === "login" ? "signup" : "login");
  };
  return (
    <div className="authentication flex center">
      <div className="phone-img">
        <img
          src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
          alt=""
        />
      </div>
      <div className="login-signup-container">
        {show === "login" ? (
          <Login onToggle={handleChange} />
        ) : (
          <Signup onToggle={handleChange} />
        )}
      </div>
    </div>
  );
}

export default Authentication;
