import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
