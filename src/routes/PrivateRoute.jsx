import { Navigate, useLocation } from 'react-router'
import Loader from '../components/Shared/Loader/Loader'
import { useAuth } from '../hooks/useAuth'
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  const location = useLocation()

  if (loading) {
    return <Loader></Loader>
  }

  if (user) {
    return children
  } else {
    toast.error("Please Login to Continue The Process!");
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
