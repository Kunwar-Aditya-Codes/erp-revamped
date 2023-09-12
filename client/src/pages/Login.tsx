import { FC } from 'react';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className='flex flex-col lg:flex-row h-full'>
      <div className='bg-black/70 w-full flex items-center justify-center lg:justify-start  flex-[0.5] bg-center bg-cover bg-no-repeat bg-blend-color bg-[url("https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80")]'>
        <h1 className='text-5xl md:text-7xl text-center lg:ml-6 lg:w-[10rem] lg:text-8xl font-bold uppercase tracking-wider text-focus-in backdrop-blur-sm bg-white/20 rounded-sm p-4 lg:p-0'>
          erp system
        </h1>
      </div>
      <div className='flex-[0.5] w-full flex items-center justify-center'>
        hello
      </div>
    </div>
  );
};

export default Login;
