import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Navigation.scss";

function Navigation() {
    return (
        
        <div>
            <NavLink className="home-button" to="/" exact>
                <FontAwesomeIcon icon="backward" className="icon" /> 
            </NavLink>
            <div className="wrapper">
                <input type="checkbox" id="btn" hidden/>
                <label for="btn" className="menu-btn">
                    <FontAwesomeIcon icon="bars" className="icon" />
                    <FontAwesomeIcon icon="times" className="icon" /> </label>
                <div id="sidebar">
                    <div className="title">thisisme</div>
                    <ul className="list-items">
                        <li>
                            <NavLink className="link" to="/s/programming" exact>
                                <FontAwesomeIcon icon="code" className="icon" /> Programming 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/technologies" exact>
                                <FontAwesomeIcon icon={[ 'fab', 'node-js']} className="icon" /> Technologies 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/education" exact>
                                <FontAwesomeIcon icon="university" className="icon" /> Education 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/job" exact>
                                <FontAwesomeIcon icon="user-md" className="icon" /> Job 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/personal" exact>
                                <FontAwesomeIcon icon="user" className="icon" /> Personal 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/certificates" exact>
                                <FontAwesomeIcon icon="certificate" className="icon" /> Certificates 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/s/result" exact>
                                <FontAwesomeIcon icon="list-alt" className="icon" /> Result 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Navigation;