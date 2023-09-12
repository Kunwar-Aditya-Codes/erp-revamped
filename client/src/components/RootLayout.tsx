import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className='h-screen overflow-hidden w-full  bg-[#161616] text-white'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
