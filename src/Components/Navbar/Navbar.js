import React from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import search from "./search-normal.png";
import bag from "./shopping-bag.png";
import heart from "./heart.png";
import profile from "./profile.png";
import language from "./Language.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <img src={Logo} alt="Logo" />
        <h1 className="logo">LOGO</h1>
        <div className="navbar-icons">
          <img src={search} alt="Logo" />
          <img src={heart} alt="Logo" />
          <img src={bag} alt="Logo" />
          <img src={profile} alt="Logo" />
          <img src={language} alt="Logo" />
        </div>
      </div>
      <div className="navbar-links">
        <p to="/shop">SHOP</p>
        <p to="/skills">SKILLS</p>
        <p to="/stories">STORIES</p>
        <p to="/about">ABOUT</p>
        <p to="/contact">CONTACT US</p>
      </div>
    </nav>
  );
};

export default Navbar;
