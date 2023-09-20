import { FC } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface RequireAuthProps {}

const RequireAuth: FC<RequireAuthProps> = ({}) => {
  const { urn } = useAuth();
  const location = useLocation();

  return (
    <>
      {urn ? (
        <Outlet />
      ) : (
        <Navigate to={'/'} state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
