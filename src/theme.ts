// src/theme.ts
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // your brand primary color
          solidColor: '#fff',
          solidBg: '#1976d2',
          solidHoverBg: '#1565c0',
        },
        neutral: {
          // neutral (gray) palette for text / backgrounds
          outlinedBorder: '#E0E3E7',
          // etc., if you need custom tokens
        },
        background: {
          // Key backgrounds
          body: '#FFFFFF',      // the main page background
          surface: '#F7F9FC',   // cards, sheets, etc.
          // you can define level1, level2, etc. if desired
        },
        text: {
          // typical text colors
          primary: '#1A2027',
          secondary: '#3E5060',
          tertiary: '#8A8A8A',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
      },
    },
    dark: {
      palette: {
        primary: {
          // dark mode primary
          solidColor: '#1976d2',
          solidBg: '#fff',
          solidHoverBg: '#DADADA',
        },
        neutral: {
          outlinedBorder: 'rgba(255, 255, 255, 0.24)',
          // etc.
        },
        background: {
          body: '#09090D',
          surface: '#18181B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          tertiary: '#6F6F6F',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
      },
    },
  },

  components: {
    JoyListItemButton: {
      styleOverrides: {
        // `root` can be either an object or a callback function that
        // receives { theme, ownerState } to customize styles.
        root: ({ theme }) => ({
          // Use Joy theme tokens instead of hard-coding colors:
          bgcolor: theme.vars.palette.background.surface,
          border: '1px solid',
          borderColor: theme.vars.palette.background.surface,

          // You can also override hover/focus states, e.g.:
          '&:hover': {
            bgcolor: theme.vars.palette.background.level1, // or another token
          },
        }),
      },
    },
  },
  // You can add any other theme customizations here,
  // for example, radius, shadow, focus, etc.
  // e.g.:
  // radius: { sm: 8, md: 12 },
  // typography: { /* custom typography settings */ },
});

export default theme;

