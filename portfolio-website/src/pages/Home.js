import React from 'react';
import TitleSection from '../components/TitleSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';

/**
 * Represents the main landing page of the portfolio website.
 * Displays sections for introduction, about, and portfolio projects.
 */
const Home = () => {

  return (
    <>
      {/* Title Section */}
      <TitleSection />
      
      <main>
        {/* Section Separator */}
        <hr className="main-content-splitter" />

        {/* About me Section */}
        <AboutSection />

        {/* Section Separator */}
        <hr className="main-content-splitter" />

        {/* Portfolio Section */}
        <PortfolioSection />
      </main>


    </>
  );
};

export default Home;