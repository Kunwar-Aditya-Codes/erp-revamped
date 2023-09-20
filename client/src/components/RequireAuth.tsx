import { FC } from 'react';
import useAuth from '../hooks/useAuth';
import { Outlet } from 'react-router-dom';

interface RequireAuthProps {}

const RequireAuth: FC<RequireAuthProps> = ({}) => {
  const { role } = useAuth();
  console.log(role);
  return <Outlet />;
};

export default RequireAuth;
