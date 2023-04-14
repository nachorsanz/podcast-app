import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './ui/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import PodcastDetail from './ui/podcast-detail/podcast-detail-component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/podcast/:id',
    element: <PodcastDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
