import React, { useContext } from 'react';
import { CircleLoader } from 'react-spinners';
import { UsedContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/adminHooks/useAdmin';

const AdminSecurRoute = ({ children }) => {

    const {user, loader}=useContext(UsedContext)
    const [isAdmin, adminLoading]=useAdmin(user?.email)
    console.log(isAdmin)
    let location =useLocation();


    if(loader || adminLoading){
        return <div className='flex justify-center align-middle'><CircleLoader color="#36d7b7" /></div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminSecurRoute;