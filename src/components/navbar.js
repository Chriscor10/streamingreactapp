import React from "react";
import profileImg from "./img/profile.jpg"
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div class="navbar-container">
        <div class="logo-container">
          <h1 class="logo">Titos TV</h1>
        </div>
        <div class="menu-container">
          <ul class="menu-list">
            <li class="menu-list-item active ">Home</li>
            <li class="menu-list-item">Movies</li>
            <li class="menu-list-item">Series</li>
            <li class="menu-list-item">Popular</li>
            <li class="menu-list-item">Trends</li>
          </ul>
        </div>
        <div class="profile-container">
                <img src={profileImg} alt="profile img" class="profile-picture"/>
                <div class="profile-text-container">
                    <span class="profile-text">Profile</span>
                    <i class="fas fa-caret-down"></i>
                </div>
                <div class="toggle">
                    <i class="fas fa-moon toggle-icon"></i>
                    <i class="fas fa-sun toggle-icon"></i>
                    <div class="toggle-ball"></div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Navbar;
