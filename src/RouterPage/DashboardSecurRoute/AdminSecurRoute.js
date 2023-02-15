import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { UsedContext } from '../../Context/AuthContext';

const AdminSecurRoute = ({children}) => {
    
// const users=useLoaderData()
// console.log(users)

const {user, loader}=useContext(UsedContext)

// const [isAdmin, isAdminLoading]=useAdmin()
   
if(loader){
    return <div className='flex justify-center align-middle'><CircleLoader color="#36d7b7" /></div>
    }

   

};

export default AdminSecurRoute;