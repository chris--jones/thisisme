import React, { useState } from 'react';
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
  const [page, setPage] = useState('home');
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
