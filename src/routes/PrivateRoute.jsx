import { Navigate, useLocation } from 'react-router'
import Loader from '../components/Shared/Loader/Loader'
import { useAuth } from '../hooks/useAuth'
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const { user, loading, userRole } = useAuth();
  
  const location = useLocation()

  if (loading || !userRole) {
    return <Loader></Loader>
  }

  if (user && userRole === "student") {
    return children;
  } else {
    toast.error("Please Login to Continue The Process!");
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
