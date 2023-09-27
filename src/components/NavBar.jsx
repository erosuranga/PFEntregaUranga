import React from "react";
import CartWidget from "./CartWidget";
import logo from "../images/logo192.png";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
        <img src={logo} alt="logo" height={80} className="NavBar-logo" />
        <span className="NavBar-title">STORE</span>
        <div className="NavBar-menu-container">
          <ul className="NavBar-menu">
            <li className="NavBar-menu-item">
              <span className="NavBar-menu-link">Verano</span>
            </li>
            <li className="NavBar-menu-item">
              <span className="NavBar-menu-link">Invierno</span>
            </li>
            <li className="NavBar-menu-item">
              <span className="NavBar-menu-link">Primavera</span>
            </li>
            <li className="NavBar-menu-item">
              <span className="NavBar-menu-link">Otoño</span>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
