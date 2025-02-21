// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from '../theme';

interface ThemeContextProps {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <CssVarsProvider
        theme={theme}
        defaultMode="light"
        modeStorageKey="real-estate-app-mode"
        colorSchemeNode={document.documentElement}
        colorSchemeSelector=":root"
        colorSchemeStorageKey="real-estate-app-color-scheme"
      >
        <div data-color-scheme={mode}>{children}</div>
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
};
