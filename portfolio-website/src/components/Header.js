import React, { useEffect, useState } from 'react';

const NavbarLinks = ({ customScroll }) => (
  <ul className="navbar-nav ml-auto gap-20">
    <li className="nav-item"><a className="nav-link" href="#root" onClick={(event) => customScroll(event, "#root")}>Home</a></li>
    <li className="nav-item"><a className="nav-link" href="#about" onClick={(event) => customScroll(event, "#about")}>About</a></li>
    <li className="nav-item"><a className="nav-link" href="#portfolio" onClick={(event) => customScroll(event, "#portfolio")}>Portfolio</a></li>
    <li className="nav-item"><a className="nav-link" href="#footer" onClick={(event) => customScroll(event, "#footer")}>Contact</a></li>
  </ul>
);

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const customScroll = (event, target) => {
    event.preventDefault();
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const height = document.querySelector('.navbar').clientHeight;
      const offset = targetSection.offsetTop - height;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const shrinkThreshold = 111;
      const shrink = window.scrollY > shrinkThreshold;
      setIsShrunk(shrink);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk]);

  return <>
    <header className={`header-class justify-content-center ${isShrunk ? 'shrink' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light navbar-container">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand"><img src="/imgs/logo.png" alt="Logo" id="logo" /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <NavbarLinks customScroll={customScroll} />
          </div>
        </div>
      </nav>
    </header>

  </>;
}

export default Header;
