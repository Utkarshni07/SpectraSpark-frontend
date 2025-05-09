import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1>Unleash Digital Brilliance with SpectraSpark</h1>
          <p>Modern Websites | Salesforce Development | Oracle Fusion | 3D Modelling | Branding</p>
          <div className="hero-buttons">
            <Link to="/services" className="hero-btn outline">Our Services</Link>
            <Link to="/contact" className="hero-btn outline">Contact Us</Link>
          </div>

          <div className="scroll-hint">
            Scroll Down
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
