import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import Welcome from './pages/dashboard/Welcome';
import RequireAuth from './components/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },

      {
        element: <RequireAuth />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
              {
                path: '/dashboard',
                element: <Welcome />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
