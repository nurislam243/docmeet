import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({children}) => {
    
  const {user,loading} = useContext(AuthContext)
  const location = useLocation()

  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }



  if(!user || !user?.email){
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
  }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;