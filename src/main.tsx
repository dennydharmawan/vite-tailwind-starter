import { MantineProvider, createTheme } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import '@mantine/core/styles.css';
import './index.css';

const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'blue',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
);
