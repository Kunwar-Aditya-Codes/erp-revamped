import { selectToken } from '@/app/slices/authSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectToken);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
};

export default useRedirect;
