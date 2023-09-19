import { FC } from 'react';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  return (
    <div className='flex items-center justify-center h-full'>
      <h1 className='text-4xl font-bold text-white/50 uppercase tracking-wider text-center'>
        Welcome User
      </h1>
    </div>
  );
};

export default Welcome;
