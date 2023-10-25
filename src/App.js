// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Table from './components/Table';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Table />
    </ThemeProvider>
  );
}

export default App;
