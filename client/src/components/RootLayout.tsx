import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className='h-screen overflow-hidden w-full text-zinc-300   bg-[#040707]'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
