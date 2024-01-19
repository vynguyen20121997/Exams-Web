import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useMatches } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.currentUser);
  const location = useLocation();
  const matches = useMatches();

  const match = [...matches.reverse()].find(
    (match) => match.pathname === location.pathname
  );
  const roles = match?.handle?.roles.join(',');
  const userRole = user && user?.role;

  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }

  if (isAuthenticated) {
    if (roles && roles === userRole) {
      return (
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      );
    }
  }
  return null;
};

export default PrivateRoute;
