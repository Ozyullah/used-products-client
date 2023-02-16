import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tradeslogo.png';
import profile from '../../assets/profilePic.png';
import { UsedContext } from '../../Context/AuthContext';
import './Header.css'


const Header = () => {

    const { user, logOut } = useContext(UsedContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="navbar-position">
            <div className="navbar navbar-position bg-blue-300">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to={'/dashboard'}>
                                Dash Board
                            </Link></li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                       
                    </ul>
                </div>
                <div className="flex-1">
                    <img className='w-10' src={logo} alt="" />
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Used Laptop Sales</Link>
                </div>

                {/* Link section started */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li><a>Item 1</a></li> */}
                        <li tabIndex={0}>
                            <Link to={'/dashboard'}>
                                Dash Board
                            </Link>

                        </li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>


                <div className="flex-none gap-2">
                    <div className="form-control" id='searceBar'>
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.uid ? <img src={user.photoURL} alt='' /> : <Link to={'/login'} title='Enter for Login'><img src={profile} alt='' /></Link>}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;