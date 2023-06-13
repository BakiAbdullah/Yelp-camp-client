import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Shared/Loader/Loader";

const InstructorRoute = ({ children }) => {
  const { user, loading, userRole } = useAuth();
  const location = useLocation();

  if (loading || !userRole) {
    return <Loader></Loader>;
  }
  if (user && userRole === "instructor") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default InstructorRoute;
