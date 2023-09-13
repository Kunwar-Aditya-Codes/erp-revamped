import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface DashboardLayoutProps {}

const DashboardLayout: FC<DashboardLayoutProps> = ({}) => {
  const [modal, setModal] = useState(false);

  // Fetch user data

  return (
    <div className='flex flex-col mt-4'>
      <nav className='h-[3.5rem] flex items-center justify-end px-4 lg:px-16 relative '>
        <div
          onClick={() => setModal(!modal)}
          className='flex items-center space-x-4 bg-white/5 px-4 py-3 rounded-md cursor-pointer'
        >
          <p>Name</p>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            alt='profile_img'
            className='w-7 h-7  rounded-full'
          />
        </div>

        <div
          className={`absolute w-[16rem] h-[10rem] bg-white/5 rounded-md top-16 transition-all duration-[250ms] ease-out ${
            modal
              ? 'scale-100 opacity-100 origin-top-right'
              : 'opacity-0 scale-0 pointer-events-none'
          }`}
        >
          <ul className='grid grid-cols-1 text-lg  font-light divide-y divide-white/5 '>
            <li className='hover:bg-purple-600 transition ease-out rounded-t-md hover:text-white cursor-pointer p-3'>
              <Link to='/'>Sign Out</Link>
            </li>
            <li className='hover:bg-purple-600 transition ease-out hover:text-white cursor-pointer p-3'>
              View Profile
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <aside>asd</aside>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
