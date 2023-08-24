import React from 'react';

const PortfolioItem = ({ title, description, technologies, category, date, githubLink, dockerLink, imgSrc, imgAlt, imgID }) => (
  <div className="row justify-content-between align-items-center project-item py-5">
    <div className="col-md-6">
      <h2 className="mb-4">{title}</h2>
      <p>{description}</p>
      <ul className="project-info-list">
        <li>
          <span>Technologies</span>: {technologies}
        </li>
        <li><span>Category</span>: {category}</li>
        <li><span>Date</span>: {date}</li>
      </ul>
      <ul className="project-info-list project-links">
        <li>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </li>
        {dockerLink && (
          <li>
            <a href={dockerLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-docker" aria-hidden="true" />
            </a>
          </li>
        )}
      </ul>
    </div>
    <div className="col-md-4">
      <img src={imgSrc} alt={imgAlt} id={imgID} />
    </div>
  </div>
);

export default PortfolioItem;