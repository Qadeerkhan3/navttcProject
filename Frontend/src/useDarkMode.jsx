// src/hooks/useDarkMode.js
import { useEffect, useState } from 'react';
import './App.css'

const UseDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return [isDarkMode, toggleTheme];
};

export default UseDarkMode;
