/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen grid place-items-center">
        <span className="loading loading-spinner text-error "></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
