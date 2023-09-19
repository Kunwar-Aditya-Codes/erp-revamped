import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicAxios } from '../utils/axios';

interface LoginData {
  urn: string;
  password: string;
}

const Login: FC = ({}) => {
  const [loginData, setLoginData] = useState<LoginData>({
    urn: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.urn || !loginData.password) {
      return;
    }

    try {
      const data = await publicAxios.post('auth/sign_in', {
        ...loginData,
      });

      // redux state add here

      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row h-full '>
      {/* Hero */}
      <div className='bg-black/70 w-full flex items-center justify-center lg:justify-start  flex-[0.2] md:flex-[0.3] lg:flex-[0.4] bg-center bg-cover bg-no-repeat bg-blend-color bg-[url("https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80")]'>
        <h1 className='text-5xl md:text-7xl text-center lg:ml-6 lg:w-[10rem] lg:text-8xl font-bold uppercase tracking-wider text-white text-focus-in backdrop-blur-sm bg-white/20 rounded-sm p-4 lg:p-0'>
          erp system
        </h1>
      </div>

      {/* Login */}
      <div className='flex-[0.8] md:flex-[0.7] lg:flex-[0.6] w-full gap-y-8 lg:gap-y-10   flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-4xl tracking-wide text-center  uppercase '>
          you are back!
        </h2>

        <form
          onSubmit={handleLogin}
          className='grid grid-cols-1 gap-y-8 max-w-[27rem] w-full p-4 px-8 md:px-0'
        >
          <input
            type='text'
            value={loginData?.urn}
            onChange={handleInputChange}
            name='urn'
            autoFocus
            placeholder='Enter urn'
            className='p-3   bg-white/30    outline-none rounded-md  md:text-lg  tracking-wider   shadow-md focus:scale-105 transition ease-out placeholder:text-white'
          />
          <input
            type='password'
            name='password'
            value={loginData?.password}
            onChange={handleInputChange}
            placeholder='Enter password'
            className='p-3   bg-white/30    outline-none rounded-md  md:text-lg  tracking-wider   shadow-md focus:scale-105 transition ease-out placeholder:text-white'
          />

          <button
            type='submit'
            className='md:text-lg hover:shadow-md tracking-widest uppercase bg-white text-black p-3  rounded-md disabled:cursor-not-allowed shadow-md outline-none active:scale-95 transition ease-out '
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
