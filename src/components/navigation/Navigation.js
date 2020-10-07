import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navigation.scss";

function Navigation() {
    return (
        
        <nav id="navigation">
            <div className="side-nav">
                <NavLink id="home-button" to="/" exact> Home </NavLink>
                <ul className="style-remover list-hover-slide">
                    <li> <NavLink className="link" to="/s/programming" exact> Programming </NavLink></li>
                    <li> <NavLink className="link" to="/s/technologies" exact> Technologies </NavLink></li>
                    <li> <NavLink className="link" to="/s/education" exact> Education </NavLink></li>
                    <li> <NavLink className="link" to="/s/job" exact> Job </NavLink></li>
                    <li> <NavLink className="link" to="/s/personal" exact> Personal </NavLink></li>
                    <li> <NavLink className="link" to="/s/certificates" exact> Certificates </NavLink></li>
                </ul>
                <NavLink id="result-button" to="/s/result" exact> Result </NavLink>
            </div>
        </nav>

    );
}

export default Navigation;