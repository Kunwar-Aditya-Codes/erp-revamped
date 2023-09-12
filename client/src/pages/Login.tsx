import { FC } from 'react';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className='flex flex-col lg:flex-row h-full '>
      <div className='bg-black/70 w-full flex items-center justify-center lg:justify-start  flex-[0.2] md:flex-[0.3] lg:flex-[0.4] bg-center bg-cover bg-no-repeat bg-blend-color bg-[url("https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80")]'>
        <h1 className='text-5xl md:text-7xl text-center lg:ml-6 lg:w-[10rem] lg:text-8xl font-bold uppercase tracking-wider text-white text-focus-in backdrop-blur-sm bg-white/20 rounded-sm p-4 lg:p-0'>
          erp system
        </h1>
      </div>
      <div className='flex-[0.8] md:flex-[0.7] lg:flex-[0.6] w-full gap-y-8 lg:gap-y-10   flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-5xl text-center font-bold uppercase tracking-wider text-white/25'>
          Welcome back!
        </h2>

        <form className='grid grid-cols-1 gap-y-8 max-w-lg w-full p-4 px-8 md:px-0'>
          <input
            type='text'
            name='urn'
            placeholder='Enter urn'
            className='p-3 md:p-4 bg-[#1e1e1e] text-white  outline-none rounded-md shadow-md md:text-lg placeholder:text-white/25 tracking-wider'
          />
          <input
            type='password'
            name='password'
            placeholder='Enter password'
            className='p-3 md:p-4 bg-[#1e1e1e] text-white  outline-none rounded-md shadow-md md:text-lg placeholder:text-white/25 tracking-wider'
          />

          <button
            disabled
            className='text-[#1e1e1e] font-medium md:text-lg hover:shadow-md tracking-widest uppercase bg-white p-3 md:p-4 rounded-md disabled:cursor-not-allowed'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
