import React, { useState, useEffect } from 'react';
import '../../src/Style-Sheets/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo-box">
        <div className="logo">Hasan's Portfolio</div>
      </div>
      {isMobile ? (
        <nav>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            &#9776;
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <div className="Button">
              <button className="menu-Close-toggle" onClick={toggleMenu} aria-label="Close menu">
                &times;
              </button>
            </div>
            <li><a onClick={toggleMenu} href="#skills">Skills</a></li>
            <li><a onClick={toggleMenu} href="#experience">Experience</a></li>
            <li><a onClick={toggleMenu} href="#projects">Projects</a></li>
            <li><a onClick={toggleMenu} href="#contact">Contact</a></li>
          </ul>
        </nav>
      ) : (
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
