import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './Footer.scss';

function Footer() {
    return (
        <div id="footer">
            <ul>
                <li data-tooltip="MIT license">
                    <a href="https://github.com/JoseDeFreitas/thisisme/blob/main/license" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon="file-contract" className="icon" />
                    </a>
                </li>
                <li data-tooltip="Privacy Policy">
                    <Link to="/privacy-policy">
                        <FontAwesomeIcon aria-hidden="true" icon="shield-alt" className="icon" />
                    </Link>
                </li>
                <li data-tooltip="Code of Conduct">
                    <a href="https://github.com/JoseDeFreitas/thisisme/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon="gavel" className="icon" />
                        </a>
                    </li>
                <li data-tooltip="Contribute">
                    <a href="https://github.com/JoseDeFreitas/thisisme/blob/main/contributing.md" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon aria-hidden="true" icon="handshake" className="icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
