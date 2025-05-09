import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  // Check if user is logged in
  if (!user.name) {
    return <Navigate to="/" replace />;
  }

  // Check if user is not allowed to access the route
  if (location.pathname === "/register" && user.permission !== 1) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
