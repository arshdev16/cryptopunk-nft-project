import React from "react";
import "./Header.css";
import punkLogo from "./assets/header/mainLogo.png";
import SearchLogo from "./assets/header/search.png";
import ThemeSwitch from "./assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="Parent">
      <div className="logoContainer">
        <img className="punkLogo" alt="Main logo" src={punkLogo} />
      </div>

      <div className="SearchBarContainer">
        <div className="SearchLogoContainer">
          <img className="searchLogo" alt="Search icon" src={SearchLogo} />
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Collection, NFT, or user..."
        />
      </div>

      <div className="headerItems">
        <p className="headerItem">Drops</p>
        <p className="headerItem">Marketplace</p>
        <p className="headerItem">Create</p>
      </div>

      <div className="headerActions">
        <button className="ThemeSwitchBtn">
          <img
            src={ThemeSwitch}
            alt="Theme switch icon"
            className="ThemeSwitchIcon"
          />
        </button>
        <div className="getInbutton">GET IN</div>
      </div>
    </div>
  );
};

export default Header;
