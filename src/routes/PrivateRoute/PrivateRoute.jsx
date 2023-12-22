import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default PrivateRoute;
