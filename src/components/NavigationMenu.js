import React, { useContext } from 'react';
import { NavigationItems, NavigationContext } from './Navigation';

const NavigationItem = ({ title, isActive }) => (
  <a
    href={`#${title.toLowerCase()}`}
    className={isActive ? 'active' : undefined}
  >
    {title}
  </a>
);

export default () => {
  const { page } = useContext(NavigationContext);
  return (
    <nav id="sidebar">
      <h2><a href="#home">thisisme</a></h2>
      <ul>
        {NavigationItems.map((item) => (
          <li key={item}>
            <NavigationItem
              title={item}
              isActive={item.toLowerCase() === page}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
