import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { UsedContext } from '../../Context/AuthContext';

const PrivateRoute = ({ children }) => {

    const {user, loader}=useContext(UsedContext)
    let location =useLocation();

    if(loader){
        return <div className='flex justify-center align-middle'><CircleLoader color="#36d7b7" /></div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;