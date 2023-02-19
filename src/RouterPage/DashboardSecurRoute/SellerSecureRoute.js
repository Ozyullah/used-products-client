import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { UsedContext } from '../../Context/AuthContext';
import useSeller from '../../hooks/sellerHook/useSeller';

const SellerSecureRoute = ({ children }) => {

    const {user, loader}=useContext(UsedContext)
    const [isSeller, sellerLoading]=useSeller(user?.email)
    let location =useLocation();

    if(loader || sellerLoading){
        return <div className='flex justify-center align-middle'><CircleLoader color="#36d7b7" /></div>
    }

    if(user && isSeller){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default SellerSecureRoute;