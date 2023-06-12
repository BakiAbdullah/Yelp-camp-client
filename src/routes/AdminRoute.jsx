import { Navigate, useLocation } from "react-router-dom";
// import { useAdmin } from "../hooks/useAdmin";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/Shared/Loader/Loader";


const AdminRoute = ({children}) => {
  const { user, loading, userRole } = useAuth();
  // const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || !userRole) {
    return <Loader></Loader>
  }
  if (user && userRole === 'admin' || userRole === 'instructor') {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;