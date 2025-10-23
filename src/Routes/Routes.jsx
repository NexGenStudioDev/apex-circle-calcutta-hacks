import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AboutKolkata from '../page/AboutKolkata';
import ContactForm from '../page/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about-kolkata',
    element: <AboutKolkata />,
  },
  {
    path: '/Contact',
    element: <ContactForm />,
  },
]);

export default router;
