import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

export default function PrivateRouteProvider({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}
