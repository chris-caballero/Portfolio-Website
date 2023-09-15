// AboutSection.js

import React from 'react';

const AboutSection = () => {
    const aboutData = {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Christopher Caballero",
        "jobTitle": "Machine Learning Engineer",
        "description": "A machine learning engineer and avid programmer with a background in Pure Mathematics and Computer Science.",
        "url": "https://chrismcaballero.com",
        "sameAs": [
          "https://github.com/chris-caballero",
          "https://www.linkedin.com/in/christopher-caballero-696b6b219/"
        ]
      };

    return (
        <section className="about-section py-5" id="about">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                <div className="col-lg-4">
                    <img
                    srcSet="
                        /imgs/about_me/me-720.webp 720w,
                        /imgs/about_me/me-540.webp 540w,
                        /imgs/about_me/me-350.webp 350w,
                        /imgs/about_me/me-420.webp 420w
                    "
                    sizes="
                        (max-width: 350px) 100vw,
                        (max-width: 540px) 350px,
                        (max-width: 767px) 540px,
                        (max-width: 991px) 720px,
                        (min-width: 1201px) 420px,
                        (max-width: 1200px) 350px
                    "
                    src="/imgs/about_me/me-420.webp"
                    alt="Portrait"
                    aria-label="Portrait of Christopher Caballero"
                    className='about-img align-self-center'
                    width="700"
                    height="850"
                    />
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

            <script type="application/ld+json">
                {JSON.stringify(aboutData)}
            </script>
        </section>
    );
};

export default AboutSection;
