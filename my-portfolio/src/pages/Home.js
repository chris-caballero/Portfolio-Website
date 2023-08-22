import React from 'react';

const Home = () => {
  return (
    <>
      <section className="title-section py-5" id="landing">
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
      <section className="about-section py-5" id="landing">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4">
              <img src="/imgs/IMG_0703.jpg" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-md-12 about-text">
              <div className="main-title">
                <h1>About me</h1>
              </div>
              <hr className="about-splitter mb-4"></hr>
              <div>
                <p>I am a machine learning engineer and avid programmer. I studied at Florida State University where I got my B.S. in Pure Mathematics and my M.S. in Computer Science.
                </p>
                <p>In my spare time I like to experiment with different projects, and I'm currently pursuing an MLOps specialization. Point is, I love to learn.
                </p>
                <p>When I'm not focused on building intelligent systems, I'm focused on getting something yummy to eat, and spending time with my cats. </p>
              </div>
              

            </div>
             
          </div>
        </div>
      </section>
      <section className="portfolio-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="display-5 text-uppercase">Portfolio</h1>
              <p style= { {'font-weight': '300' } }>My favorite projects!</p>
            </div>
          </div>
          <div className="row justify-content-between project-item py-5">
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
                <img src="/imgs/credit-card-fraud.png" alt="Project Image" />
              </div>
          </div>          
          <div className="row justify-content-between project-item py-5">
            <div className="col-md-6">
              <h2 className="mb-4">Support Ticket Classification App</h2>
              <p>Developed a custom language model using PyTorch for classification on a support ticket dataset. Made a containerized app so you could see how your request would get classified. </p>
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
              <img src="/imgs/support-ticket-app.png" alt="Project Image" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;