import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {}

interface LoginData {
  urn: string;
  password: string;
}

const Login: FC<LoginProps> = ({}) => {
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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);

    navigate('/dashboard');
  };

  return (
    <div className='flex flex-col lg:flex-row h-full '>
      <div className='bg-black/70 w-full flex items-center justify-center lg:justify-start  flex-[0.2] md:flex-[0.3] lg:flex-[0.4] bg-center bg-cover bg-no-repeat bg-blend-color bg-[url("https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80")]'>
        <h1 className='text-5xl md:text-7xl text-center lg:ml-6 lg:w-[10rem] lg:text-8xl font-bold uppercase tracking-wider text-white text-focus-in backdrop-blur-sm bg-white/20 rounded-sm p-4 lg:p-0'>
          erp system
        </h1>
      </div>
      <div className='flex-[0.8] md:flex-[0.7] lg:flex-[0.6] w-full gap-y-8 lg:gap-y-10   flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-4xl tracking-wide text-center font-light uppercase '>
          <span className='text-purple-500 font-normal'>you</span> are back!
        </h2>

        <form
          onSubmit={handleLogin}
          className='grid grid-cols-1 gap-y-8 max-w-lg w-full p-4 px-8 md:px-0'
        >
          <input
            type='text'
            value={loginData?.urn}
            onChange={handleInputChange}
            name='urn'
            placeholder='Enter urn'
            className='p-3 md:p-4 bg-white/5   outline-none rounded-md shadow-md md:text-lg placeholder:text-white/25 tracking-wider'
          />
          <input
            type='password'
            name='password'
            value={loginData?.password}
            onChange={handleInputChange}
            placeholder='Enter password'
            className='p-3 md:p-4 bg-white/5   outline-none rounded-md shadow-md md:text-lg placeholder:text-white/25 tracking-wider'
          />

          <button
            type='submit'
            className='text-[#1e1e1e] font-medium md:text-lg hover:shadow-md tracking-widest uppercase bg-zinc-300 p-3 md:p-4 rounded-md disabled:cursor-not-allowed'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
