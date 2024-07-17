import { createBrowserRouter,RouteObject } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import React from "react";
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';

const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/students', element: <Students /> },
    { path: '*', element: <NotFound /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;