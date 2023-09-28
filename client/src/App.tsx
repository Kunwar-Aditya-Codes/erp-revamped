import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import Welcome from './pages/dashboard/Welcome';
import RequireAuth from './components/RequireAuth';
import Faculty from './pages/private/Faculty';
import Persist from './components/Persist';
import Student from './pages/private/Student';
import AddMember from './pages/private/AddMember';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,

    children: [
      {
        element: <Persist />,
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
                    index: true,
                    element: <Welcome />,
                  },

                  {
                    path: 'faculties',
                    element: <Faculty />,
                  },

                  {
                    path: 'students',
                    element: <Student />,
                  },

                  {
                    path: 'add-member',
                    element: <AddMember />,
                  },
                ],
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
