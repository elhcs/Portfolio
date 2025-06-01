import React, { useState } from 'react';
import './Rebrand.css';

const Rebrand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="site-container">
      <div className="header">
        <nav className="main-nav">
          <ul className="nav-links">
            <li className="nav-item current"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/courses">Courses</a></li>
            <li className="nav-item"><a href="/plans-pricing">Plans & Pricing</a></li>
          </ul>
        </nav>
        
        <button className="enroll-btn">Enroll Now</button>
        
        {/* Mobile menu button - only visible on smaller screens */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="main-title">HOUSSAIN</h1>
            <p className="subtitle">Discover the Joy of Music with our Courses</p>
          </div>
          
          {/* Black SVG shapes */}
          
        </div>
      </main>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={toggleMenu} aria-label="Close menu">
            ×
          </button>
          <ul className="mobile-nav-links">
            <li className="mobile-nav-item current"><a href="/">Home</a></li>
            <li className="mobile-nav-item"><a href="/about">About</a></li>
            <li className="mobile-nav-item"><a href="/courses">Courses</a></li>
            <li className="mobile-nav-item"><a href="/plans-pricing">Plans & Pricing</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rebrand;