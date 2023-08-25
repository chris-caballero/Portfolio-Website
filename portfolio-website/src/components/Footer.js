import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer-class py-5" id="footer">
        <div className="container">
          {/* Footer Content Row */}
          <div className="row justify-content-between">
            
            {/* About Section */}
            <div className="col-md-5">
              <h2 className="footer-title">About this portfolio</h2>
              <p className="footer-text">
                I made this site with React on Node.js with the intention of bringing my projects to life (˶ᵔ ᵕ ᵔ˶).
              </p>
              <p className="footer-text"> 
                As far as web-development goes, I'm still pretty <span className="green">green</span>. That's why I took on the challenge of designing this website from scratch! 
              </p>
              <p className="footer-text">
                Each project has been an incredible learning opportunity, allowing me to dive into a wide range of technologies and concepts. I believe that the process of creation is just as important as the final product, and I'm excited to share these ideas with you.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-5 contact-container">
              <h2 className="footer-title mb-3">Contact</h2>
              <p className="footer-text">Feel free to contact me with any questions, you can reach me by email with the link below. If you want to contribute to any of my projects, go ahead and open an issue or pull request on GitHub.</p>
              {/* Personal Links */}
              <div className="personal-links-container d-flex mt-4">
                  <ul className="personal-links d-flex gap-30 justify-content-center">
                    <li>
                      {/* GitHub */}
                      <a href="https://github.com/chris-caballero" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/in/christopher-caballero-696b6b219/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>                  
                    <li>
                      {/* Kaggle */}
                      <a href="https://www.kaggle.com/chriscaballero" target="_blank" rel="noopener noreferrer">
                        <i id="kaggle-icon" className="fab fa-kaggle" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      {/* Email */}
                      <a href="mailto:chrismcaballero@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i id="mail-icon" className="fa fa-envelope-square" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
