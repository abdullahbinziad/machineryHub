import { Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuthContext();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
