// src/components/ThemeToggle.js
import React from 'react';
import UseDarkMode from './UseDarkMode';

const ThemeToggle = () => {
  const [isDarkMode, toggleTheme] = UseDarkMode();

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? '🌙 Dark Mode' : '🔆 Light Mode'}
    </button>
  );
}

export default ThemeToggle;
