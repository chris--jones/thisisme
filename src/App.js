import React, { useEffect, useState } from 'react';
import './index.css';
import NavigationMenu from './components/NavigationMenu';
import Navigation from './components/Navigation';
import GlobalState from './components/GlobalState';
import {
  Home,
  Programming,
  Technologies,
  Education,
  Job,
  Personal,
  Certificates,
  Result,
  Privacy,
  PageNotFound,
} from './pages';

export const Switch = ({ page }) => {
  switch (page) {
    case 'home':
      return <Home />;
    case 'programming':
      return <Programming />;
    case 'technologies':
      return <Technologies />;
    case 'education':
      return <Education />;
    case 'job':
      return <Job />;
    case 'personal':
      return <Personal />;
    case 'certificates':
      return <Certificates />;
    case 'privacy':
      return <Privacy />;
    case 'result':
      return <Result />;
    default:
      return <PageNotFound />;
  }
};

export default () => {
  const currentPage = location.hash ? location.hash.substr(1) : 'home';
  const [page, setPage] = useState(currentPage);
  const setPageFromHash = () => {
    if (location.hash) {
      setPage(location.hash.substr(1));
    } else {
      setPage('home');
    }
  };
  useEffect(() => {
    window.addEventListener('hashchange', setPageFromHash, false);
  }, []);
  return (
    <GlobalState>
      <Navigation page={page} setPage={setPage}>
        <NavigationMenu />
        <main>
          <Switch page={page} />
        </main>
      </Navigation>
    </GlobalState>
  );
};
