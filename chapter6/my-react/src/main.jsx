import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MaterialBasic from './MaterialBasic.jsx';
import MaterialDrawer from './MaterialDrawer.jsx';
import MaterialGrid from './MaterialGrid.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.jsx';
import { CssBaseline } from '@mui/material';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));

// root.render(<MaterialBasic />);

// root.render(<MaterialDrawer />);

// root.render(<MaterialGrid />);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MaterialBasic />
  </ThemeProvider>
);
