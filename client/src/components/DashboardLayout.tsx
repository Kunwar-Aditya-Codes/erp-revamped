import { FC, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

interface DashboardLayoutProps {}

const DashboardLayout: FC<DashboardLayoutProps> = ({}) => {
  const [modal, setModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Fetch user data

  return (
    <div className='flex flex-col h-full '>
      {/* Navbar */}
      <nav className=' py-4 flex items-center  justify-end px-4 lg:px-16 relative  '>
        <div
          onClick={() => setModal(!modal)}
          className='flex items-center space-x-4 px-4 py-[0.6rem]  bg-white/10 backdrop-blur-md shadow-md  rounded-md cursor-pointer'
        >
          <p>Name</p>
          <img
            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            alt='profile_img'
            className='w-7 h-7  rounded-full'
          />
        </div>

        {/* Dropdown */}
        <div
          className={`absolute w-[16rem]  h-[10rem] bg-white/10 shadow-md z-50 text-black backdrop-blur-md  rounded-md top-[4.2rem] transition-all duration-[250ms] ease-out ${
            modal
              ? 'scale-100 opacity-100 origin-top-right'
              : 'opacity-0 scale-0 pointer-events-none'
          }`}
        >
          <ul className='grid grid-cols-1 text-white divide-y divide-white/50  '>
            <Link
              to='/'
              className=' transition ease-out rounded-t-md hover:bg-white hover:text-black cursor-pointer p-3'
            >
              Sign Out
            </Link>
            <li className='hover:bg-mid transition ease-out hover:bg-white hover:text-black cursor-pointer p-3'>
              View Profile
            </li>
          </ul>
        </div>
      </nav>

      <div className='flex flex-grow h-full md:p-2'>
        {/* Sidebar */}
        <aside
          className={`md:flex-[0.3] lg:flex-[0.18] h-full w-full sm:w-[70%] bg-white/10 backdrop-blur-md md:rounded-md md:shadow-md ${
            sidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <ul className='gap-y-10 px-2 w-full grid grid-cols-1 justify-items-center py-4  uppercase  text-lg tracking-widest pt-8'>
            <li className='hover:bg-white rounded-md hover:text-black transition ease-out  w-full text-center py-3 cursor-pointer'>
              Faculty
            </li>
            <li className='hover:bg-white rounded-md hover:text-black transition ease-out w-full text-center py-3 cursor-pointer'>
              Students
            </li>
          </ul>
        </aside>
        <div
          className={`md:hidden fixed bottom-4 right-4 bg-white/10 backdrop-blur-md shadow-md rounded-full text-xl p-2 cursor-pointer  `}
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>

        {/* Remaining Content */}
        <div className='md:flex-[0.7] lg:flex-[0.82]'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
