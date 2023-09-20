import { FC } from 'react';
import useAuth from '../../hooks/useAuth';

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  const { role } = useAuth();

  return (
    <div className='flex items-center justify-center h-full'>
      <h1 className='text-4xl font-bold text-white/50 uppercase tracking-wider text-center'>
        Welcome {role}
      </h1>
    </div>
  );
};

export default Welcome;
