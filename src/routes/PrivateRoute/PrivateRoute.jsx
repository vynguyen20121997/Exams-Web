import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useMatches } from "react-router-dom";
import { AUTH_ROLES } from "../../constants/enums";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const user = useSelector((state) => state.auth.currentUser);

  const location = useLocation();
  const matches = useMatches();
  const match = [...matches.reverse()].find(
    (match) => match.pathname === location.pathname
  );
  const roles = match?.handle?.roles;

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (user) {
    const userRole = user.role;

    if (roles && roles.includes(userRole)) {
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
