import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { App } from './App.tsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import './uikit/main/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
);
