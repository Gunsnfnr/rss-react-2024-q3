'use client';

import { createContext, PropsWithChildren, useMemo } from 'react';
import useSetTheme from './useSetTheme';

export const ThemeContext = createContext({ theme: 'dark', changeTheme: () => {} });

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { theme, changeTheme } = useSetTheme();
  const themeContextProviderValue = useMemo(() => ({ theme, changeTheme }), [theme, changeTheme]);

  return <ThemeContext.Provider value={themeContextProviderValue}>{children}</ThemeContext.Provider>;
};
