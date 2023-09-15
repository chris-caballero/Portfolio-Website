// PortfolioSection.js

import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioSection = () => {      
    return (
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
                imgSrc="/imgs/portfolio/support-ticket/ticket"
                imgAlt="Support Ticket Classification App Interface"
                imgID="ticket-img"
                />
                <PortfolioItem
                title="Credit Card Fraud Detection"
                description="I used GCP AI Platform to train and deploy an optimized XGBoost model on my processed dataset. Then I created a Google Cloud Function to send inference requests to my hosted model. Additionally, I performed comparative analysis on three simpler models, also trained to flag fraudulent transactions - Logistic Regression, Random Forest and SVC."
                technologies="Python, GCP AI Platform, GCP Cloud Functions, Jupyter"
                category="Classification, Anomaly Detection, Imbalanced Data"
                date="June 2023"
                githubLink="https://github.com/chris-caballero/Fraud-Transaction-Detection"
                webLink="https://chris-caballero.github.io/Fraud-Transaction-Detection"
                imgSrc="/imgs/portfolio/fraud-detection/fraud"
                imgAlt="Credit Card Fraud Detection"
                imgID="fraud-img"
                />
                <PortfolioItem
                title="Carbon Emission Analysis"
                description="Conducted an in-depth data analysis of carbon emissions within England, focusing on examining significant insights related to the carbon data of the Lower Super Outer Areas (LSOAs)."
                technologies="Python, Docker, GeoPandas, Jupyter"
                category="Data Analysis, Geospatial Analysis"
                date="July 2023"
                githubLink="https://github.com/chris-caballero/Carbon-Footprint-LSOA"
                dockerLink="https://hub.docker.com/repository/docker/chrismcaballero/carbon-footprint-analysis/general"
                imgSrc="/imgs/portfolio/carbon-emission/emission"
                imgAlt="Carbon Emission Data Analysis"
                imgID="emission-img"
                />
                <PortfolioItem
                title="Skip Gram Implementation"
                description="My first ever project in Machine Learning! Here I implemented the Skip Gram model, the grandfather of modern language models and embeddings. I created functions for both forward and backward passes, along with custom callbacks and visualizations for understanding the movement of word vectors as they converge - hence the clip. It was great getting a look under-the-hood of this model and break into the field!"
                technologies="Python, Numpy, Matplotlib, Jupyter"
                category="Word Embeddings, Natural Language Processing (NLP), Data Visualization"
                date="January 2022"
                githubLink="https://github.com/chris-caballero/Skip-Gram-Implementation"
                dockerLink="https://hub.docker.com/repository/docker/chrismcaballero/skip-gram-notebook/general"
                imgSrc="/imgs/portfolio/skipgram"
                imgAlt="Skip Gram Model Visualization"
                gifID="skip-gram-img"
                />
                {/* You can add more PortfolioItem components for other projects */}
            </div>
        </section>
    );
};

export default PortfolioSection;
