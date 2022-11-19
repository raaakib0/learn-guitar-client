import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLoaction();

    if (!user) {
        return <Navigate to="/login" ></Navigate>
    }
    return children;
};

export default PrivateRoute;