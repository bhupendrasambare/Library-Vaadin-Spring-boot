import { createBrowserRouter } from 'react-router-dom';
import TodoView from './pages/TodoView';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const router = createBrowserRouter([
    { path: '/', element: <Home/>},
    { path: '/hello', element: <TodoView/>},
    { path: '/bye', element: <TodoView/>},,
    { path: '/*', element: <NotFound/>},
]);

export default router;