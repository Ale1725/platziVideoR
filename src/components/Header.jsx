import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/platziSushi_logo3.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Sign Off</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
