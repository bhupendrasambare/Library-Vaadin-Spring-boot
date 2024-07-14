import { createBrowserRouter,RouteObject } from 'react-router-dom';
import TodoView from './pages/TodoView';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import React from "react";
import Dashboard from './pages/Dashboard';

const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/bye', element: <TodoView /> },
    { path: '*', element: <NotFound /> },
  ];
  
  const router = createBrowserRouter(routes);

export default router;