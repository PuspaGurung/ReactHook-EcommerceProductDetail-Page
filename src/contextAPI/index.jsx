import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

const ContextApi = (props) => {
  const { children } = props;
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // execute useEffect only when darkMode is changs
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((dark) => !dark);
  }

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const userPrefersDarkMode = getPreferColorScheme();
    const savedMode = JSON.parse(localStorage.getItem('dark'));

    // 1.) if suer already visited the page and mode was saved either 'dark' or 'light'
    // 2.) if prefered color mode is dark
    // 3.)  otherwise return  false i.e dark mode would be false in firit visit of the site

    return isReturningUser ? savedMode : userPrefersDarkMode ? true : false;
  }

  function getPreferColorScheme() {
    if (!window.matchMedia) return '';
    return window.matchMedia('(prefers-color-scheme:dark)').matches;
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export default ContextApi;
