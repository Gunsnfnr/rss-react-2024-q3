import { ReactNode } from 'react';
import '../index.css';
import { ThemeProvider } from '../context/themeContext';
import { StoreProvider } from '../store/storeProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
