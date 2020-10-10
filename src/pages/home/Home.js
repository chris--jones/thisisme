import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from '../../components/footer/Footer';
import "./Home.scss";

function Home() {
    return (
        <div id="home">
            <a id="version-text" href="https://github.com/JoseDeFreitas/thisisme/releases" target="_blank" rel="noopener noreferrer">v1.0.0</a>
            <h1>thisisme</h1>
            <p>Create cool images containing useful<br/>information about you and your work<br/>for your GitHub readme</p>
            <div id="cta-buttons">
                <Link id="main-button" to="/s/programming">Start</Link>
                <a id="gh-button" href="https://github.com/JoseDeFreitas/thisisme" target="_blank" rel="noopener noreferrer" title="thisisme GitHub repository">
                    <FontAwesomeIcon icon={["fab", "github"]}/>
                </a>
            </div>
            <p id="hacktoberfest-p">See the <a href="https://github.com/JoseDeFreitas/thisisme/issues">Issues section</a> to know where to contribute for the Hacktoberfest 2020! Thank you 😊</p>
            <Footer/>
        </div>
    );
}

export default Home;
