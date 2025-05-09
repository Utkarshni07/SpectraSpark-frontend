import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">SpectraSpark<span> Technology</span></div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/strengths">Strengths</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
