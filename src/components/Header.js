import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">SpectraSpark<span> Technology</span></div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/strengths" onClick={closeMenu}>Strengths</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
