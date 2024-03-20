import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage.jsx";
import ChecklistsPage from "./pages/ChecklistsPage.jsx";
import TimeBlocksPage from "./pages/TimeBlocksPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/index",
    element: <IndexPage />,
  },
  {
    path: "/checklists",
    element: <ChecklistsPage />,
  },
  {
    path: "/timeblocks",
    element: <TimeBlocksPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
