import React, { createContext, useContext } from 'react';

export const NavigationItems = [
  'Personal',
  'Programming',
  'Technologies',
  'Education',
  'Job',
  'Certificates',
  'Result',
];

export const NavigationContext = createContext({
  page: 'home',
  setPage: () => {},
});

export default ({ page, setPage, children }) => {
  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};
