import React from 'react'

const TitleSection = () => {
  return <>
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
                      <a href="https://github.com/chris-caballero" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/christopher-caballero-696b6b219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>                  
                    <li>
                      <a href="https://www.kaggle.com/chriscaballero" target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
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
  </>;
}

export default TitleSection;