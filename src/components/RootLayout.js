import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div>
        {children}
      </div>
    </ThemeProvider>
  )
}