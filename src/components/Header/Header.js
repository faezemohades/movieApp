import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <div>
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;
