import { selectToken } from '@/app/slices/authSlice';
import { privateAxios } from '@/utils/axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useRefresh from './useRefresh';

const usePrivateAxios = () => {
  const token = useSelector(selectToken);
  const refresh = useRefresh();

  useEffect(() => {
    const requestInterceptor = privateAxios.interceptors.request.use(
      async (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = privateAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response?.status === 401 && !error.config._retry) {
          error.config._retry = true;
          try {
            const newAccessToken = await refresh();
            error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return privateAxios(error.config);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refresh]);

  return privateAxios;
};

export default usePrivateAxios;
