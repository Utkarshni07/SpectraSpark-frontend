import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <header className="header">
      <div className="logo">SpectraSpark<span> Technology</span></div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={isMobile ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/strengths" onClick={closeMenu}>Strengths</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </nav>
    </header>
  );
}

export default Header;