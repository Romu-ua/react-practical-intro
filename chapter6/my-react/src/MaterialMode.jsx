import { useState } from 'react';
import { CssBaseline,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { amber, grey } from '@mui/material/colors';

export default function MaterialMode() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prev) => {
      mode === 'light' ? 'dark' : 'light';
    });
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: amber,
          }
        : {
            primary: {
              main: grey[500],
              contrastText: '#fff',
            },
            background: {
              default: grey[900],
              paper: grey[900],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button />
    </ThemeProvider>
  );
}
