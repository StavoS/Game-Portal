import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

function PrivateRoute({ children }) {
    const { user } = useAuth();
    return user ? children : <Navigate to="/unauthorized" />;
}

export default PrivateRoute;
