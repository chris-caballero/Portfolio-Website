import React from 'react';

const Home = () => {

  return (
    <>
      <section className="title-section py-5" id="home"> 
        <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                  <div className="main-title">
                      <h1 className="display-1 title-name">Christopher Caballero</h1>
                      <hr className="title-splitter"></hr>
                      <p className="title-description mt-3">Hi, hello, what's up? I love to code, and here's the result. I really hope you enjoy these projects.</p>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <hr className="main-content-splitter" />
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4">
              <img src="/imgs/me-2.jpg" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-md-12 about-text">
              <div className="main-title">
                <h1>About me</h1>
              </div>
              <hr className="about-splitter mb-4"></hr>
              <div className="about-main-text">
                <p>I am a machine learing engineer and an avid programmer. I studied at Florida State University where I got my B.S. in Pure Mathematics and my M.S. in Computer Science.
                </p>
                <p>In my spare time I like to experiment with different projects, and I'm currently pursuing an MLOps specialization. Point is, I love to learn.
                </p>
                <p>When I'm not focused on building intelligent systems, I'm focused on getting something yummy to eat, and spending time with my cats. </p>
              </div>
              <ul className="about-links d-flex">
                <li><a class="about-link-button text-uppercase" href="https://github.com/chris-caballero" target="_blank">Github</a></li>
                <li><a class="about-link-button text-uppercase" href="https://www.linkedin.com/in/christopher-caballero-696b6b219/" target="_blank">LinkedIn</a></li>
                <li><a class="about-link-button text-uppercase" href="/documents/resume.pdf" target="_blank">Resume</a></li>
              </ul>
            </div>
             
          </div>
        </div>
      </section>
      <hr className="main-content-splitter" />
      <section className="portfolio-section py-5" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="main-title">Portfolio</h1>
              <hr className="portfolio-splitter mb-2"></hr>
              <p style= { {'font-weight': '300' } }>My favorite projects!</p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center project-item py-5">
              <div className="col-md-6">
                <h2 className="mb-4">Credit Card Fraud Detection</h2>
                <p>Trained three models to flag fraudulent transactions. Used class imbalance techniques and outlier removal to improve model performance.</p>
                <ul className="project-info-list"> 
                  <li>
                    <span>Technologies</span>: Python, scikit-learn, pandas, matplotlib
                  </li>
                  <li><span>Category</span>: Classification, Anomaly Detection</li>
                  <li><span>Date</span>: June 2023</li>
                </ul>
                <ul className="project-info-list project-links">
                  <li>
                    <a href="https://github.com/chris-caballero/Fraud-Transaction-Detection" target="_blank"><i className="fab fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <img src="/imgs/credit-card-fraud.png" alt="Project Image" id="fraud-img" />
              </div>
          </div>          
          <div className="row justify-content-between align-items-center project-item py-5">
            <div className="col-md-6">
              <h2 className="mb-4">Support Ticket Classification App</h2>
              
              <p>Developed a custom transformer language model using PyTorch for classification on a support ticket dataset. Made a user-friendly containerized Flask app so you could see how your request would get classified. </p>
              <ul className="project-info-list"> 
                <li>
                  <span>Technologies</span>: Python, PyTorch, Docker, Flask, HTML, JS, CSS
                </li>
                <li><span>Category</span>: Classification, Language Model, Transformer</li>
                <li><span>Date</span>: August 2023</li>
              </ul>
              <ul className="project-info-list project-links">
                <li>
                  <a href="https://github.com/chris-caballero/Ticket-Classification-App" target="_blank"><i className="fab fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://hub.docker.com/repository/docker/chrismcaballero/ticket-classification/general" target="_blank"><i className="fab fa-docker" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <img src="/imgs/ticket-01.png" alt="Project Image" id="ticket-img" />
            </div>
          </div>
          <div className="row justify-content-between align-items-center project-item py-5">
            <div className="col-md-6">
              <h2 className="mb-4">Carbon Emission Analysis</h2>
              <p>Conducted an in-depth data analysis of carbon emissions within England, focusing on examining significant insights related to the carbon data of the Lower Supper Outer Areas (LSOAs). The dataset for this analysis was sourced from PBCC's data repository, available at <a href="https://www.carbon.place/data/">https://www.carbon.place/data/</a>.</p> 
              <ul className="project-info-list"> 
                <li>
                  <span>Technologies</span>: Python, Docker, GeoPandas
                </li>
                <li><span>Category</span>: Classification, Language Model, Transformer</li>
                <li><span>Date</span>: August 2023</li>
              </ul>
              <ul className="project-info-list project-links">
                <li>
                  <a href="https://github.com/chris-caballero/Carbon-Footprint-LSOA" target="_blank"><i className="fab fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://hub.docker.com/repository/docker/chrismcaballero/carbon-footprint-analysis/general" target="_blank"><i className="fab fa-docker" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <img src="/imgs/emission-01.png" alt="Project Image" id="emission-img" />
            </div>
          </div>
        </div>
      </section>      
      <hr className="main-content-splitter" />
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="main-title">Contact</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;