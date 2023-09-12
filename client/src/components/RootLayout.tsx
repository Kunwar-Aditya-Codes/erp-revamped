import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className='h-screen overflow-hidden w-full   bg-[#121212]'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
