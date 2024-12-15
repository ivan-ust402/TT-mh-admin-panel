import { useLocation, Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element
}

export const RequiredSearchParams = ({ children }: Props) => {
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const idParam = searchParams.get('id');

  if (!idParam) {
    return <Navigate to="/notfound" replace />;
  }

  return children;
};