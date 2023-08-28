import React, { useState, useEffect } from 'react';

const PortfolioItem = ({ title, description, technologies, category, date, githubLink, dockerLink, webLink, imgSrc, imgAlt, imgID }) => {
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
        {(windowWidth < 765 && imgID !== "ticket-img") && <hr className="portfolio-item-splitter mb-5"/>}
        {/* Project Content */}
        <div className="col-md-6 order-2 order-md-1">
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
        <div className="col-md-4 order-1 order-md-2 mb-4">
          <img src={imgSrc} alt={imgAlt} id={imgID} />
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
