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

export const NavigationButton = ({ to, content }) => {
  const { setPage } = useContext(NavigationContext);
  const onButtonClick = () => setPage(to);
  return <button onClick={onButtonClick}>{content}</button>;
};

export default ({ page, setPage, children }) => {
  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      {children}
    </NavigationContext.Provider>
  );
};
