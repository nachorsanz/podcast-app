import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './ui/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
