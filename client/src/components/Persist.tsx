import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from '../app/slices/authSlice';
import useRefresh from '../hooks/useRefresh';
import usePersist from '../hooks/usePersist';
import { BiLoaderCircle } from 'react-icons/bi';

interface PersistProps {}

const Persist: FC<PersistProps> = () => {
  const token = useSelector(selectToken);
  const refresh = useRefresh();
  const { persist } = usePersist();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    if (!token && persist) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [token, persist, refresh]);

  return (
    <>
      {!persist ? (
        <Outlet />
      ) : isLoading ? (
        <div className=' h-full flex items-center justify-center'>
          <BiLoaderCircle className='animate-spin h-12 w-12' />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Persist;
