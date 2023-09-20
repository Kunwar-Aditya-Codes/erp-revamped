import jwtDecode from 'jwt-decode';
import { selectToken } from '../app/slices/authSlice';
import { useSelector } from 'react-redux';

interface Decoded {
  role: string;
  urn: string;
}

const useAuth = () => {
  const token = useSelector(selectToken);

  let role;
  let urn;

  if (token) {
    const decoded: Decoded = jwtDecode(token);

    role = decoded.role;
    urn = decoded.urn;
  }

  return { role, urn };
};

export default useAuth;
