import { RootState } from 'src/store/store';
import { useAppSelector } from './redux-hooks';

export function useAuth() {
  const { isAuthenticated, loading, error } = useAppSelector((state: RootState) => state.auth);
  return {
    isAuth: isAuthenticated,
    loading,
    error
  }
}