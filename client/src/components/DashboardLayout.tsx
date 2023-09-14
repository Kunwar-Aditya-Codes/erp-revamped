import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface DashboardLayoutProps {}

const DashboardLayout: FC<DashboardLayoutProps> = ({}) => {
  const [modal, setModal] = useState(false);

  // Fetch user data

  return (
    <div className='flex flex-col h-full divide-y-2 divide-mid'>
      <nav className=' py-4 flex items-center  justify-end px-4 lg:px-16 relative  '>
        <div
          onClick={() => setModal(!modal)}
          className='flex items-center space-x-4 px-4 py-[0.6rem] border rounded-md border-mid  cursor-pointer'
        >
          <p>Name</p>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            alt='profile_img'
            className='w-7 h-7  rounded-full'
          />
        </div>

        <div
          className={`absolute w-[16rem]  h-[10rem] bg-dark border border-mid rounded-md top-[4.2rem] transition-all duration-[250ms] ease-out ${
            modal
              ? 'scale-100 opacity-100 origin-top-right'
              : 'opacity-0 scale-0 pointer-events-none'
          }`}
        >
          <ul className='grid grid-cols-1 text-lg font-light divide-y divide-mid '>
            <Link
              to='/'
              className='hover:bg-mid transition ease-out rounded-t-md hover:text-white cursor-pointer p-3'
            >
              Sign Out
            </Link>
            <li className='hover:bg-mid transition ease-out hover:text-white cursor-pointer p-3'>
              View Profile
            </li>
          </ul>
        </div>
      </nav>

      <div className='flex flex-grow h-full divide-x-2 divide-mid'>
        <aside className='flex-[0.18] h-full w-full'>
          <ul className='gap-y-10  w-full grid grid-cols-1 justify-items-center py-4  uppercase font-light text-lg tracking-widest pt-8'>
            <li className='hover:bg-mid transition ease-out hover:text-white w-full text-center py-3 cursor-pointer'>
              Faculty
            </li>
            <li className='hover:bg-mid transition ease-out hover:text-white w-full text-center py-3 cursor-pointer'>
              Students
            </li>
          </ul>
        </aside>

        <div className='flex-[0.8]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
