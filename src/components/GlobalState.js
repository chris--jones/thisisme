import React, { createContext, useState } from 'react';

const localStorageKey = 'thisisme';

const getFromStorage = () => JSON.parse(localStorage.getItem(localStorageKey));

const setToStorage = (value) => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(value),
  );
};

const DEFAULT_STATE = {
  programming: {},
  technologies: {},
  education: {},
  job: {},
  personal: {},
  certificates: {},
};

export const GlobalStateContext = createContext([DEFAULT_STATE, () => {}]);
let localStorageTimeout = 0;

export default ({ children }) => {
  const [state, setState] = useState(getFromStorage() || DEFAULT_STATE);
  const setMergedState = (key, value) => {
    let newState = {
      ...state,
      [key]: value,
    };
    setState(newState);
    if (localStorageTimeout) clearTimeout(localStorageTimeout);
    localStorageTimeout = setTimeout(() => {
      setToStorage(newState);
    }, 1000);
  };
  return (
    <GlobalStateContext.Provider value={[state, setMergedState]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
