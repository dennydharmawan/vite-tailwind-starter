import { MantineProvider, createTheme } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@mantine/core/styles.css';
import './index.css';
import { mantineColors } from './lib/mantine.ts';

const theme = createTheme({
  primaryColor: 'slate',
  colors: mantineColors,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
);
