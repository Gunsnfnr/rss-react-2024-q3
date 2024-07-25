import { useLayoutEffect, useState } from 'react';

const useSetTheme = () => {
  const [theme, setTheme] = useState('dark');
  const storedTheme = localStorage.getItem('gunsnfnr.sw-theme');
  const setThemeMode = (mode: string) => {
    window.localStorage.setItem('gunsnfnr.sw-theme', mode);
    setTheme(mode);
  };
  const changeTheme = () => {
    theme === 'dark' ? setThemeMode('light') : setThemeMode('dark');
  };
  useLayoutEffect(() => {
    storedTheme && setTheme(storedTheme);
  }, [storedTheme]);
  return { theme, changeTheme };
};

export default useSetTheme;
