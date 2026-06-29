import Loading from "../components/Loading";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";
const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
