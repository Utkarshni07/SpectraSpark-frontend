import React, { useState } from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="logo">SpectraSpark<span> Technology</span></div>

      <FaBars className="menu-icon" onClick={handleToggle} />

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            onClick={handleClose}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
            onClick={handleClose}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="strengths"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
            onClick={handleClose}
          >
            Strengths
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="active"
            onClick={handleClose}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;