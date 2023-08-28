import React, { useEffect } from 'react';

const Header = () => {
  // Function to scroll to the specified target section
  const customScroll = (event, target) => {
    event.preventDefault();
    const targetSection = document.querySelector(target);
    if (targetSection) {
      // Calculate offset to account for fixed header height
      const height = document.querySelector('.navbar').clientHeight;
      const offset = targetSection.offsetTop - height;

      // Smooth scroll to the target section
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  // Effect to update the header on scroll
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    
    // Scroll event handler
    const handleScroll = () => {
      // Determine whether to shrink the header
      const shrink = window.scrollY > 111;

      // Update header styles based on scroll position
      if (shrink) {
        navbar.style.backgroundColor = "white";
        navbar.style.paddingTop = "0";
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.paddingTop = "1.25rem";
      }
    }

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // The header class contains the navbar for moving around the page (single page implementation)

  return (
    <header className="header-class align-items-center">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex">
          {/* Logo */}
          <a href="/" className="navbar-brand"><img src="/imgs/logo.png" alt="Logo" id="logo" /></a>
          
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ><span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navbar list container */}
        <div className="container">
          {/* Navbar Collapse */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto gap-20">
              {/* Navigation Links */}
              <li className="nav-item"><a className="nav-link" href="#root" onClick={(event) => customScroll(event, "#root")}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about" onClick={(event) => customScroll(event, "#about")}>About</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio" onClick={(event) => customScroll(event, "#portfolio")}>Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#footer" onClick={(event) => customScroll(event, "#footer")}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
