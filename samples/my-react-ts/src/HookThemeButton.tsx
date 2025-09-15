import { use } from 'react';
import { Button } from '@mui/material';
import ThemeContext, { type ThemeContextType } from './ThemeContext';

export default function HookThemeButton() {
  const { mode, toggleMode } = use<ThemeContextType>(ThemeContext);
  // const { mode, toggleMode } = use<Partial<ThemeContextType>>(ThemeContext);
  return (
    <Button variant="contained" onClick={toggleMode}>
      Mode {mode}
    </Button>
  );
}