import React from 'react';
import { Outlet } from 'react-router-dom';
import DashHeader from '../../DashBoardPage/DashHeader/DashHeader';

const DashLayout = () => {
    return (
       <div>
        <DashHeader></DashHeader>
        <Outlet></Outlet>
       </div>
    );
};

export default DashLayout;