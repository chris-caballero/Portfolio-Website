import React, { useEffect } from 'react';

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
      });
    }
  };

  useEffect(() => {
    const nav = document.querySelector(".navbar")

    const handleScroll = () => {
      const shrink = window.scrollY > 111;

      if (shrink) {
        nav.style.backgroundColor = "white";
        nav.style.padding = "0 0";
      } else {
        nav.style.backgroundColor = "white";
        nav.style.padding = "25px 0";
      }
    }
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  });

  return (
    <header className="header-class">
      <nav className="navbar d-flex justify-content-between align-items-center">
        <div className="container navbar-container">
          <div className="navbar-brand">
            <a href="#root" onClick={(event) => customScroll(event, "#root")}><img src="/imgs/logo-2.png" alt="Logo" id="logo" /></a>
          </div>
          <ul className="nav-links d-flex gap-30 pt-3">
            <li><a href="#root" onClick={(event) => customScroll(event, "#root")}>Home</a></li>
            <li><a href="#about" onClick={(event) => customScroll(event, "#about")}>About</a></li>
            <li><a href="#portfolio" onClick={(event) => customScroll(event, "#portfolio")}>Portfolio</a></li>
            <li><a href="#footer" onClick={(event) => customScroll(event, "#footer")}>Contact</a></li>
            {/* <li><a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
