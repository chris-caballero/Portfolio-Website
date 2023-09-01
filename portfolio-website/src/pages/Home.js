import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

/**
 * Represents the main landing page of the portfolio website.
 * Displays sections for introduction, about, and portfolio projects.
 */
const Home = () => {

  return (
    <>
      {/* Title Section */}
      <section className="title-section"> 
        {/* Introduction */}
        <div className="container title-container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main-title">
                <h1 className="display-1 text-center title-name pb-4">Christopher Caballero</h1>
                <hr className="title-splitter"></hr>

                <div className="title-description-container d-flex justify-content-center pt-5">
                  <p className="title-description mt-3r">Hi, hello, what's up? I love to code, and here's the result. I really hope you enjoy these projects.</p>
                </div>
                <div className="personal-links-container d-flex justify-content-center pt-4">
                    <ul className="personal-links d-flex gap-30 justify-content-center">
                      <li>
                        <a href="https://github.com/chris-caballero" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/christopher-caballero-696b6b219/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>                  
                      <li>
                        <a href="https://www.kaggle.com/chriscaballero" target="_blank" rel="noopener noreferrer">
                          <i id="kaggle-icon" className="fab fa-kaggle" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Separator */}
      <hr className="main-content-splitter" />

      {/* About me Section */}
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4">
              <img src="/imgs/me-2-min.webp" className="img-fluid" alt="Me" />
            </div>
            <div className="col-lg-7 col-md-12 about-text mt-4">
              <div className="main-title">
                <h1>About me</h1>
              </div>
              <hr className="about-splitter mb-4"></hr>
              <div className="about-main-text text-start">
                <p>I am a machine learning engineer and an avid programmer. I studied at Florida State University where I got my B.S. in Pure Mathematics and my M.S. in Computer Science.</p>
                <p>In my spare time, I like to experiment with different projects, and I'm currently pursuing an MLOps specialization. Point is, I love to learn.</p>
                <p>When I'm not focused on building intelligent systems, I'm focused on getting something yummy to eat and spending time with my cats.</p>
              </div>
              <ul className="about-links d-flex">
                <li><a className="about-link-button text-uppercase" href="https://github.com/chris-caballero" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a className="about-link-button text-uppercase" href="https://www.linkedin.com/in/christopher-caballero-696b6b219/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a className="about-link-button text-uppercase" href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <hr className="main-content-splitter" />

      {/* Portfolio Section */}
      <section className="portfolio-section py-5" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="main-title">Portfolio</h1>
              <hr className="portfolio-splitter mb-2" />
              <p style={{ fontWeight: '300' }}>My favorite projects!</p>
            </div>
          </div>
          <PortfolioItem
            title="Support Ticket Classification App"
            description="Developed a custom transformer language model using PyTorch for classification on a support ticket dataset. Made a user-friendly containerized Flask app so you could see how your request would get classified."
            technologies="Python, PyTorch, Docker, Flask, HTML, JS, CSS"
            category="Classification, Language Model, Transformer"
            date="August 2023"
            githubLink="https://github.com/chris-caballero/Ticket-Classification-App"
            dockerLink="https://hub.docker.com/repository/docker/chrismcaballero/ticket-classification/general"
            webLink="https://chris-caballero.github.io/Ticket-Classification-App"
            imgSrc="/imgs/ticket-01.webp"
            imgAlt="Support Ticket Classification App"
            imgID="ticket-img"
          />
          <PortfolioItem
            title="Credit Card Fraud Detection"
            description="Trained three models to flag fraudulent transactions. Used class imbalance techniques and outlier removal to improve model performance. Additionally trained XGBoost for optimized performance on this task. Soon to be deployed on GCP for serving requests."
            technologies="Python, scikit-learn, pandas, matplotlib"
            category="Classification, Anomaly Detection"
            date="June 2023"
            githubLink="https://github.com/chris-caballero/Fraud-Transaction-Detection"
            webLink="https://chris-caballero.github.io/Fraud-Transaction-Detection"
            imgSrc="/imgs/credit-card-fraud.webp"
            imgAlt="Credit Card Fraud Detection"
            imgID="fraud-img"
          />
          <PortfolioItem
            title="Carbon Emission Analysis"
            description="Conducted an in-depth data analysis of carbon emissions within England, focusing on examining significant insights related to the carbon data of the Lower Super Outer Areas (LSOAs)."
            technologies="Python, Docker, GeoPandas"
            category="Data Analysis, Geospatial Analysis"
            date="July 2023"
            githubLink="https://github.com/chris-caballero/Carbon-Footprint-LSOA"
            dockerLink="https://hub.docker.com/repository/docker/chrismcaballero/carbon-footprint-analysis/general"
            imgSrc="/imgs/emission-01.webp"
            imgAlt="Carbon Emission Analysis"
            imgID="emission-img"
          />
          <PortfolioItem
            title="Skip Gram Implementation"
            description="My first ever project in Machine Learning! Here I implemented the Skip Gram model, the grandfather of modern language models and embeddings. I created functions for both forward and backward passes, along with custom callbacks and visualizations for understanding the movement of word vectors as they converge - hence the gif. It was great getting a look under-the-hood of this model and break into the field!"
            technologies="Python, Numpy, Matplotlib"
            category="Word Embeddings, Natural Language Processing (NLP), Data Visualization"
            date="January 2022"
            githubLink="https://github.com/chris-caballero/Skip-Gram-Implementation"
            dockerLink="https://hub.docker.com/repository/docker/chrismcaballero/skip-gram-notebook/general"
            imgSrc="/imgs/skip-gram-slow-min.gif"
            imgAlt="Skip Gram Implementation"
            imgID="skip-gram-img"
          />
          {/* You can add more PortfolioItem components for other projects */}
        </div>
      </section>
    </>
  );
};

export default Home;