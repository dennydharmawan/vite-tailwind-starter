import ReactDOM from 'react-dom/client';

import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import App from './App.tsx';
import { mantineColors } from './lib/mantine.ts';

import './styles/base.css';

const theme = createTheme({
  primaryColor: 'slate',
  colors: mantineColors
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
