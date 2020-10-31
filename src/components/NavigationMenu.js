import React, { useContext } from 'react';
import { NavigationContext } from './Navigation';

const NavigationItems = [
  'Personal',
  'Programming',
  'Technologies',
  'Education',
  'Job',
  'Certificates',
  'Result',
];

const NavigationItem = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    data-to={title.toLowerCase()}
    className={isActive ? 'active' : undefined}
  >
    {title}
  </button>
);

export default () => {
  const { page, setPage } = useContext(NavigationContext);
  const goHome = () => setPage('home');
  const menuItemClick = (event) => setPage(event.target.dataset.to);
  return (
    <nav id="sidebar">
      <h2 onClick={goHome}>thisisme</h2>
      <ul>
        {NavigationItems.map((item) => (
          <li key={item}>
            <NavigationItem
              title={item}
              isActive={item.toLowerCase() === page}
              onClick={menuItemClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
