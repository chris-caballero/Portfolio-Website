import React from 'react';

const Header = () => {
  const customScroll = (event, target) => {
    event.preventDefault();
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const height = document.querySelector('.navbar').clientHeight;
      const offset = targetSection.offsetTop - height;

      window.scrollTo({
        top: offset,
        behavior: "smooth"
      })
    }
  };

  return (
    <header className="header-class">
      <nav className="navbar d-flex justify-content-between align-items-center">
        <div className="container navbar-container">
          <div className="navbar-brand">
            <a href="/">CC</a>
          </div>
          <ul className="nav-links d-flex gap-30 pt-3">
            <li><a href="#home" onClick={(event) => customScroll(event, "#home")}>Home</a></li>
            <li><a href="#about" onClick={(event) => customScroll(event, "#about")}>About</a></li>
            <li><a href="#portfolio" onClick={(event) => customScroll(event, "#portfolio")}>Portfolio</a></li>
            <li><a href="#contact" onClick={(event) => customScroll(event, "#contact")}>Contact</a></li>
            <li><a href="/documents/resume.pdf" target="_blank">Resume</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
