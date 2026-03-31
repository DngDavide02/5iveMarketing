import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" className="logo-link">
            <img src="src\assets\logo-transparent-bg.png" alt="5iveMarketing" className="logo-image" />
          </a>
        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-cta">
          <button className="cta-button">Get Started</button>
        </div>

        <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
          <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="mobile-nav-link" onClick={toggleMenu}>
              {link.name}
            </a>
          ))}
          <button className="mobile-cta-button" onClick={toggleMenu}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
