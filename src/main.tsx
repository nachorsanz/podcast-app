import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './ui/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './reset.css';
import PodcastPage from './ui/pages/Podcast';
import EpisodePage from './ui/pages/Episode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/podcast/:id',
    element: <PodcastPage />,
  },
  {
    path: '/podcast/:id/episode/:idEpisode',
    element: <EpisodePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
