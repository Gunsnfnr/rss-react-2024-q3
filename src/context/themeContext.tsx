import { createContext, PropsWithChildren } from 'react';
import useSetTheme from './use-set-theme';

export const ThemeContext = createContext({ theme: 'dark', changeTheme: () => {} });

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { theme, changeTheme } = useSetTheme();

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};
