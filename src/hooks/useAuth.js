import { useSelector } from 'react-redux'

export const useAuth = () => {
  const token = useSelector((state) => state.authorization.token);

  return token !== null;
}