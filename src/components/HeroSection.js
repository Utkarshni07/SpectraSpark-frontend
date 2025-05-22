import React from "react";
import "./HeroSection.css";
import { Link as ScrollLink } from "react-scroll"; // import ScrollLink instead of react-router Link

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
      <div className="overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1>Unleash Digital Brilliance with SpectraSpark</h1>
          <p>
            Modern Websites | Salesforce Development | Oracle Fusion | 3D
            Modelling | Branding
          </p>
          <div className="hero-buttons">
            <ScrollLink
              to="services"
              smooth={true}
              duration={600}
              offset={-70}
            >
              <button className="hero-btn outline">Our Services</button>
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
            >
              <button className="hero-btn outline">Contact Us</button>
            </ScrollLink>
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
