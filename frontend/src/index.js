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
            main: "#E20616",
            light: "#FADDE6",
            dark: "#895256"
        },
        secondary: {
            main: "#D7E4F5",
            light: "#EFF3F9",
            dark: "#2379D2",
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
