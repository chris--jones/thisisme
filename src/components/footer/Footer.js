import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
    return (
        <div id="footer">
            <ul>
                <li>This work is under the <a href="https://github.com/JoseDeFreitas/thisisme/blob/main/license" target="_blank" rel="noopener noreferrer">MIT license</a></li>
                <li><Link to="/privacy-policy">Privacy policy</Link></li>
                <li><a href="https://github.com/JoseDeFreitas/thisisme/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer">Code of conduct</a></li>
                <li><a href="https://github.com/JoseDeFreitas/thisisme/blob/main/contributing.md" target="_blank" rel="noopener noreferrer">Contribute</a></li>
            </ul>
        </div>
    );
}

export default Footer;
