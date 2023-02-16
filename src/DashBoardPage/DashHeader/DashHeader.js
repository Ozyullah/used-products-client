import React from 'react';
import { Link } from 'react-router-dom';

const DashHeader = () => {
    return (
        <div className="navbar bg-blue-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><Link to={'/dashboard/mywishlist'}>My WishList</Link></li> */}
                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/reportedItems'}>Reported items</Link></li>
                        <li tabIndex={0}>
                            <Link to={'/dashboard/allusers'} className="justify-between">
                                All Users
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
                        <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                        <li><Link to={''}>My Buyers</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><Link to={'/dashboard/mywishlist'}>My WishList</Link></li> */}
                    <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                    <li><Link to={'/dashboard/reportedItems'}>Reported items</Link></li>
                    <li tabIndex={0}>
                        <Link to={'/dashboard/allusers'}>
                            All Users
                        </Link>
                        <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>

                    </li>
                    <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
                    <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                    <li><Link to={''}>My Buyers</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default DashHeader;