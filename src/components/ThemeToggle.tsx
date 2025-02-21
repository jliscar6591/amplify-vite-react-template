// src/components/ThemeToggle.tsx
import React from 'react';
import IconButton from '@mui/joy/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useColorMode } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="plain"
      color="neutral"
      onClick={toggleColorMode}
      sx={{ ml: 1 }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
