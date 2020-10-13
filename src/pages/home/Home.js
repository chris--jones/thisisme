import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from '../../components/footer/Footer';
import "./Home.scss";

import ImageProgramming from '../../images/home-image-programming.svg'
import ImageTechnologies from '../../images/home-image-technologies.svg'
import ImageEducation from '../../images/home-image-education.svg'
import ImageJob from '../../images/home-image-job.svg'
import ImagePersonal from '../../images/home-image-personal.svg'
import ImageCertificates from '../../images/home-image-certificates.svg'

function Home() {
    return (
        <div id="home">
            <div id="home-images">
                <img className="home-image" src={ImageProgramming} alt="Programming section preview"/>
                <img className="home-image" src={ImageTechnologies} alt="Technologies section preview"/>
                <img className="home-image" src={ImageEducation} alt="Education section preview"/>
                <img className="home-image" src={ImageJob} alt="Job section preview"/>
                <img className="home-image" src={ImagePersonal} alt="Personal section preview"/>
                <img className="home-image" src={ImageCertificates} alt="Certificates section preview"/>
            </div>
            <a id="version-text" href="https://github.com/JoseDeFreitas/thisisme/releases" target="_blank" rel="noopener noreferrer">v1.0.0</a>
            <h1>thisisme</h1>
            <p>Create cool images containing useful<br/>information about you and your work<br/>for your GitHub readme</p>
            <div id="cta-buttons">
                <Link id="main-button" to="/s/programming">Start</Link>
                <a id="gh-button" href="https://github.com/JoseDeFreitas/thisisme" target="_blank" rel="noopener noreferrer" title="thisisme GitHub repository">
                    <FontAwesomeIcon icon={["fab", "github"]}/>
                </a>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
