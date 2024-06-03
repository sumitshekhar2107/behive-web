import React from "react";
import "./Global.css";
import logo from "./behive_logo.png";
import callIcon from "./call.png";
export {};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ paddingLeft: "20px" }}
        />
      </div>
      <section className="header-section">
        <div className="header-image-container">
          <img src={callIcon} alt="Hero" className="header-image" />
        </div>
      </section>
    </header>
  );
};

export default Header;
