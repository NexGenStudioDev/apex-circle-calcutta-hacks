import React from 'react';
import { createBrowserRouter, ScrollRestoration, Outlet } from 'react-router-dom';
import App from '../App';
import AboutKolkata from '../page/AboutKolkata';
import ContactForm from '../page/ContactPage';

// Root Layout Component
const RootLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about-kolkata',
        element: <AboutKolkata />,
      },
    ],
  },
]);

export default router;
