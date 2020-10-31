import React from 'react';

export default () => {
    return (
        <div id="error-container">
            <h1 id="error-status-code">404</h1>
            <h1 id="error-title">Uh oh! This page couldn't be found.</h1>
            <p id="error-content">Sorry but the page you are looking for does not exist , have been removed ,
                name changed or is temporarily unavaliable. 
            </p>
            <a to="/" id="home-button"> Go to homepage</a>
        </div>
    )
}