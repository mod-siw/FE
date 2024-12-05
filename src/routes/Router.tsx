import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import MadePage from '../pages/MadePage/MadePage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: '', element: <MainPage /> }],
  },
  {
    path: '/made',
    children: [{ path: '', element: <MadePage /> }],
  },
]);

export default router;
