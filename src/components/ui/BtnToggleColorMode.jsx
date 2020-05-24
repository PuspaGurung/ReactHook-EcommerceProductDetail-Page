import React, { useContext } from 'react';
import { DarkModeContext } from '../../contextApi';

const BtnToggleAppColor = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="toggle-color-mode">
      <input
        type="checkbox"
        className="toggle-color-mode__checkbox"
        id="toggle-color-mode"
        defaultChecked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="toggle-color-mode" className="toggle-color-mode__label-1">
        Contain slide icon
      </label>
      <label htmlFor="toggle-color-mode" className="toggle-color-mode__label-2">
        Change to {darkMode ? 'Light Mode' : 'Dark Mode'}
      </label>
    </div>
  );
};

export default BtnToggleAppColor;
