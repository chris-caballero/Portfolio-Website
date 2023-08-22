import React from 'react';

const Header = () => {
  return (
    <header className="header-class">
      <nav className="navbar d-flex justify-content-between align-items-center">
        <div className="container navbar-container">
          <div className="navbar-brand">
            <a href="/">CC</a>
          </div>
          <ul className="nav-links d-flex gap-30 pt-3">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Resume">Resume</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
