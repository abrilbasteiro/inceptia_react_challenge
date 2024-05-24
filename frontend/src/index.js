import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
    palette: {
      primary: {
          main: "#01A59E",
          light: "#F2FAFA",
          // light: "#B8E1DF",
          dark: "#042940"
      },
      secondary: {
          main: "#4472C4",
          light: "#ACDBFF",
          dark: "#254E6C",
      },
      text: {
          dark: '#333333',
          primary: '#666666',
          secondary: '#999999',
          disabled: '#CCCCCC',
        },
    },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
