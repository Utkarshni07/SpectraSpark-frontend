import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 SpectraSpark Technology. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:contact@spectrasparktech.com">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;