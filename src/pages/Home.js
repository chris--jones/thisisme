import React, { useContext } from 'react';
import { NavigationContext } from '../components/Navigation';

export default () => {
  const { setPage } = useContext(NavigationContext);
  const goProgramming = () => setPage('programming');
  return (
    <div id="home">
      <a
        id="version-text"
        href="https://github.com/JoseDeFreitas/thisisme/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        v1.0.0
      </a>
      <h1>thisisme</h1>
      <p>
        Create cool images containing useful
        <br />
        information about you and your work
        <br />
        for your GitHub readme
      </p>
      <button onClick={goProgramming}>Start</button>
      <br />
      <a
        id="gh-button"
        href="https://github.com/JoseDeFreitas/thisisme"
        target="_blank"
        rel="noopener noreferrer"
        title="thisisme GitHub repository"
      >
        github
      </a>
    </div>
  );
};
