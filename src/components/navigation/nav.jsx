import React, { useState } from "react";
import "./nav.css";
 import logo from "./goodtech-logo.jpg";

const Nav = () => {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About","Catagories", "Contact"];

  const handleNavClick = (item) => {
    setActive(item);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Goodtech Logo" className="logo" />
          <h1></h1>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;