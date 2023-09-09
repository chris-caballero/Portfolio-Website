import React, { useState, useEffect } from 'react';

const PortfolioItem = ({ title, description, technologies, category, date, githubLink, dockerLink, webLink, imgSrc, imgAlt, imgID, gifID }) => {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event listener callback for window resize
    const handleResize = () => {
      // Update window width state on resize
      setWindowWidth(window.innerWidth);
    };

    // Add resize event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Remove resize event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return (
    <>
      {/* Portfolio Item Container */}
      <div className="row justify-content-between align-items-center project-item py-5">
        {/* Conditionally render splitter based on window width and imgID */}
        {(windowWidth < 991 && imgID !== "ticket-img") && <hr className="portfolio-item-splitter mb-5"/>}
        {/* Project Content */}
        <div className="col-lg-6 order-2 order-lg-1">
          {/* Project Title */}
          <h2 className="mb-4">{title}</h2>
          {/* Project Description */}
          <p>{description}</p>
          {/* Project Information */}
          <ul className="project-info-list">
            <li>
              <span>Technologies</span>: {technologies}
            </li>
            <li><span>Category</span>: {category}</li>
            <li><span>Date</span>: {date}</li>
          </ul>
          {/* Project Links */}
          <ul className="project-info-list project-links">
            {/* GitHub Link */}
            <li>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true" />
              </a>
            </li>
            {/* Docker Link */}
            {dockerLink && (
              <li>
                <a href={dockerLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-docker" aria-hidden="true" />
                </a>
              </li>
            )}
            {webLink && (
              <li>
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-globe" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </div>
        {/* Project Image */}
        <div className="col-lg-4 order-1 order-lg-2 mb-4">
        {gifID && (
          <div className="video-wrapper">
            <video autoPlay loop muted playsInline>
              <source src={`${imgSrc}.mp4`} type="video/mp4" alt={imgAlt} id={gifID} loading="lazy" />
            </video>              
          </div>
        )}
        {!gifID && (
          <img
            srcSet={`
              ${imgSrc}-416.webp 416w,
              ${imgSrc}-350.webp 320w,
              ${imgSrc}-486.webp 486w,
              ${imgSrc}-696.webp 696w,
              ${imgSrc}-416.webp
            `}
            sizes={`
              (max-width: 767px) 486px,
              (max-width: 990px) 696px,
              (max-width: 1260px) 320px,
              (min-width: 1261px) 416px,
            `}
            src={`${imgSrc}-416.webp`}
            alt={imgAlt}
            id={imgID}
          />
        )}
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
