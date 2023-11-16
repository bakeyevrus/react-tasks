import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    darkModeOn
      ? html.classList.add('dark-mode')
      : html.classList.remove('dark-mode');
  }, [darkModeOn]);

  const handleDarkModeChange = () => setDarkModeOn(!darkModeOn);

  const value = { handleDarkModeChange, darkModeOn };
  return <DarkModeContext.Provider value={value}></DarkModeContext.Provider>;
};
