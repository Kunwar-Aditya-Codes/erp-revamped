import jwtDecode from 'jwt-decode';
import { selectToken } from '../app/slices/authSlice';
import { useSelector } from 'react-redux';

interface Decoded {
  role: string;
}

const useAuth = () => {
  const token = useSelector(selectToken);

  let role;

  if (token) {
    const decoded: Decoded = jwtDecode(token);

    console.log(decoded);

    role = decoded.role;
  }

  return { role };
};

export default useAuth;
