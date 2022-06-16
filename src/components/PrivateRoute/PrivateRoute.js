import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const location = useLocation()
    return (
        <div>
            {
                user.email ? children : <Navigate to="/login" replace state={{from: location}}/>
            }
        </div>
    );
};

export default PrivateRoute;