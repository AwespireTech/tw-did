import './global';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { ApplicationContext } from './contexts/ApplicationContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApplicationContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ApplicationContext>
  </StrictMode>
);
