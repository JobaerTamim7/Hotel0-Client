import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

export default function PrivateRouteProvider({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}
