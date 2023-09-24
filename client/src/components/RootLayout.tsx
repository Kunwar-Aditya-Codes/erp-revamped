import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className='h-screen  overflow-hidden w-full text-white   bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-800 '>
      <Outlet />
    </div>
  );
};

export default RootLayout;
