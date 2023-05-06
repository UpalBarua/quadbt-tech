import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import Details from '../pages/details/details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shows/:id',
    element: <Details />,
  },
]);

export default router;
