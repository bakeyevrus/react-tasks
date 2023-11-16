import React, { useContext } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DarkModeContext } from '../../../DarkModeContext';

export const DarkModeButton = () => {
  const { darkModeOn, handleDarkModeChange } = useContext(DarkModeContext);

  return (
    <button
      onClick={handleDarkModeChange}
      className="app__dark-mode-btn icon level-right"
    >
      <FontAwesomeIcon
        color={darkModeOn ? '#FFA500' : 'black'}
        icon={darkModeOn ? faSun : faMoon}
      />
    </button>
  );
};
